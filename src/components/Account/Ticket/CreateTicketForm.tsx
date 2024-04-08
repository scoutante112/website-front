// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from 'preact/compat';
import { DocumentIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { array, mixed, object, string } from 'yup';
import { useFormik } from 'formik';
import createTicket from '../../../api/account/tickets/createTicket';
import { toast } from 'react-toastify';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';

import { Account } from '../Manager/Forms/EditAccountForm';

function formatFileSize(sizeInBytes: number) {
    const sizes = ['B', 'KB', 'MB'];
    let i = 0;
    while (sizeInBytes > 1024 && i < sizes.length - 1) {
        sizeInBytes /= 1024;
        i++;
    }
    return `${Math.round(sizeInBytes * 100) / 100} ${sizes[i]}`;
}

interface CreateTicketFormProps {
    setOpen: (open: boolean) => void;
    mutate: any;
    account: Account;
}

export default function CreateTicketForm({ setOpen, mutate, account }: CreateTicketFormProps) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const { dark } = useDark();
    const [licenseChecked, setLicenseChecked] = useState<boolean>(false);
    const form = object({
        subject: string().required(t('account.ticket.container.form.obj.subject.1')).min(16, t('account.ticket.container.form.obj.subject.2')).max(64, t('account.ticket.container.form.obj.subject.3')),
        message: string().required(t('account.ticket.container.form.obj.message.1')).min(64, t('account.ticket.container.form.obj.message.2')),
        license: string().nullable(),
        attachments: array().of(mixed()).nullable(),
        logs_url: string().nullable('').url(t('account.ticket.container.form.obj.logs')),
    });

    const formik = useFormik({
        initialValues: { subject: '', message: '', attachments: [] as File[], license: '', logs_url: '' },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            values.attachments.map((file: any) => {
                setError('');
                if (file.size > 8388608) {
                    setError(t('account.ticket.container.form.error.1'));
                    setLoading(false);
                    return null;
                }
                return null;
            });
            if ((!values.license && !licenseChecked) || (!values.logs_url && !checked)) {
                setError(t('account.ticket.container.form.error.2'));
                setLoading(false);
                return null;
            }
            createTicket(values.subject, values.message, account, values.license, values.attachments, values.logs_url).then((data) => {

                if (data.data.status === 'error') {
                    setError(`${t('account.utils.error')}: ${data.data.message}`);
                    setLoading(false);
                    return null;
                }
                mutate();
                const inputs = document.querySelectorAll('input:not(#search)');
                const textareas = document.querySelectorAll('textarea');

                inputs.forEach((input: any) => {
                    input.value = '';
                });
                textareas.forEach((textarea) => {
                    textarea.value = '';
                });
                setLoading(false);
                toast.success(t('account.ticket.container.form.toast.1'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                setOpen(false);
            }).catch((e) => {

                setError(`${t('account.utils.error')}: ${e.response.data.message}`);
                setLoading(false);

            });
        },
    });
    return (
        <div className={`${dark ? 'bg-bg450-dark' : 'bg-white'} shadow sm:rounded-lg mt-4`}>
            <div className='px-4 py-5 sm:p-6'>
                <h3 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}> {t('account.ticket.container.form.title')}</h3>

                <form onSubmit={formik.handleSubmit} className='mt-5 sm:items-center'>

                    <div className='w-full sm:max-w-xs my-2'>
                        <label htmlFor='subject'
                            className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                            {t('account.ticket.container.form.fields.1')}
                        </label>
                        <input
                            type='text'
                            name='subject'
                            onChange={formik.handleChange}
                            disabled={loading}
                            id='subject'
                            className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            placeholder='A problem with the product'
                        />
                    </div>
                    <div className='w-full my-2'>
                        <label htmlFor='comment'
                            className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                            {t('account.ticket.container.form.fields.2')}
                        </label>
                        <div className='mt-2'>
                            <textarea
                                rows={4}
                                name='message'
                                onChange={formik.handleChange}
                                disabled={loading}
                                id='message'
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className={'flex justify-between my-2 gap-x-2'}>
                        <div className='w-full sm:max-w-xs '>
                            <label htmlFor='subject'
                                className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                                {t('account.ticket.container.form.fields.3')} <span
                                    className={`${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'} my-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`}>
                                    {t('account.ticket.container.form.fields.4')}
                                </span>
                            </label>
                            <input
                                type='text'
                                name='license'
                                onChange={formik.handleChange}
                                disabled={loading}
                                id='license'
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            />
                        </div>
                        <div className='w-full sm:max-w-xs'>
                            <label htmlFor='subject'
                                className={`${dark ? 'text-slate-300' : 'text-gray-900'} my-2 block text-sm font-medium leading-6`}>
                                {t('account.ticket.container.form.fields.5')} <span
                                    className={`${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'}inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`}>
                                    {t('account.ticket.container.form.fields.4')}
                                </span>
                            </label>
                            <input
                                type='text'
                                name='logs_url'
                                onChange={formik.handleChange}
                                disabled={loading}
                                id='logs_url'
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            />
                        </div>
                    </div>

                    <div className='col-span-full my-2'>
                        <label htmlFor='cover-photo'
                            className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                            {t('account.ticket.container.form.fields.6')} {' '}
                            <span
                                className={`${dark ? 'bg-bg450-logohover text-white' : 'bg-gray-50 text-gray-600'} my-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10`}>
                                {t('account.ticket.container.form.fields.4')}
                            </span>
                        </label>
                        <div
                            className={`${dark ? 'border-b450-logo' : 'border-gray-900/25'} mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed  px-6 py-10 space-y-4`}
                            id='file-drop-area'
                            onDragOver={(e) => {
                                e.preventDefault();
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                const newFiles = Array.from(e.dataTransfer ? e.dataTransfer.files : []);
                                const updatedAttachments = [...formik.values.attachments, ...newFiles];
                                formik.setFieldValue('attachments', updatedAttachments);
                            }}
                        >
                            <DocumentIcon className='mx-auto h-12 w-12 text-gray-300' aria-hidden='true' />
                            <div className='text-center'>
                                <label
                                    htmlFor='file-upload'
                                    className={`${dark ? 'text-bg450-logo hover:text-bg450-logohover' : 'text-indigo-600 hover:text-indigo-500'} relative cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-bg450-logo focus-within:ring-offset-2 `}
                                >
                                    <span>{t('account.ticket.container.form.fields.7')}</span>
                                    <input
                                        id='file-upload'
                                        name='file-upload'
                                        type='file'
                                        className='sr-only'
                                        multiple
                                        onChange={(e) => {
                                            if (e.target) {
                                                const input = e.target as HTMLInputElement;
                                                if (input.files) {
                                                    const newFiles = Array.from(input.files);
                                                    const updatedAttachments = [...formik.values.attachments, ...newFiles];
                                                    formik.setFieldValue('attachments', updatedAttachments);
                                                }
                                            }
                                        }}
                                    />
                                </label>
                                <p className='pl-1 my-auto'>{t('account.ticket.container.form.fields.8')} </p>
                            </div>

                        </div>
                        {formik.values.attachments.length > 0 &&
                            <div>
                                <p className=' my-2 block text-sm font-medium leading-6 text-gray-900'>Selected
                                    Files:</p>
                                <ul className='grid md:grid-cols-3 justify-between gap-x-2 gap-y-2'>
                                    {
                                        formik.values.attachments.map((file, index) => (
                                            <li key={index}
                                                className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
                                                <div className='flex w-full items-center justify-between space-x-6 p-6'>
                                                    <div className='flex-1 truncate'>
                                                        <div className='flex items-center space-x-3'>
                                                            <h3 className='truncate text-sm font-medium text-gray-900'>{file.name ? file.name.slice(0, 22) : ''}{(file.name ? file.name.length > 22 : false) && '...'}</h3>
                                                            <span
                                                                className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium   ring-1 ring-inset ${file.size > 8388608 ? 'text-red-700  bg-red-50 ring-red-600/20' : file.size > 7340032 ? 'text-orange-700  bg-orange-50 ring-orange-600/20' : 'text-green-700  bg-green-50 ring-green-600/20'}`}>
                                                                {formatFileSize(file.size)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <XMarkIcon
                                                        className={'text-red-500 rounded-full border-2 border-red-500 w-6 h-6'}
                                                        onClick={() => {
                                                            const updatedAttachments = [...formik.values.attachments];
                                                            updatedAttachments.splice(index, 1);
                                                            formik.setFieldValue('attachments', updatedAttachments);
                                                        }} />
                                                </div>
                                                <div>
                                                </div>
                                            </li>

                                        ))}
                                </ul>
                            </div>
                        }
                    </div>

                    <div className={'gap-y-2 my-2'}>
                        {!formik.values.logs_url &&
                            <div className='w-full '>
                                <div className='relative flex items-start'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='logs'
                                            aria-describedby='comments-description'
                                            name='No logsUrl'
                                            type='checkbox'
                                            checked={checked}
                                            onClick={() => setChecked(!checked)}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='ml-3 text-sm leading-6 lg:flex gap-x-2'
                                        onClick={() => setChecked(!checked)}>
                                        <label htmlFor='comments'
                                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} font-medium`}>
                                            {t('account.ticket.container.form.fields.9')}
                                        </label>
                                        <p id='comments-description'
                                            className={`${dark ? 'text-slate-300' : 'text-gray-500'} my-auto`}>
                                            {t('account.ticket.container.form.fields.10')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        {!formik.values.license &&
                            <div className='w-full '>
                                <div className='relative flex items-start'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='nolicense'
                                            aria-describedby='comments-description'
                                            name='No license/order'
                                            type='checkbox'
                                            checked={licenseChecked}
                                            onClick={() => setLicenseChecked(!licenseChecked)}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='ml-3 text-sm leading-6 lg:flex gap-x-2'
                                        onClick={() => setLicenseChecked(!licenseChecked)}>
                                        <label htmlFor='comments'
                                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} font-medium`}>
                                            {t('account.ticket.container.form.fields.11')}
                                        </label>{' '}
                                        <p id='comments-description'
                                            className={`${dark ? 'text-slate-300' : 'text-gray-500'} my-auto`}>
                                            {t('account.ticket.container.form.fields.12')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {Object.keys(formik.errors).length > 0 && (
                        <div className='rounded-md bg-red-50 p-4 my-2'>
                            <div className='flex'>
                                <div className='flex-shrink-0'>
                                    <XCircleIcon className='h-5 w-5 text-red-400' aria-hidden='true' />
                                </div>
                                <div className='ml-3 '>
                                    <h3 className='text-sm font-medium text-red-800'>{t('account.ticket.container.form.fields.13')} {Object.keys(formik.errors).length} {t('account.ticket.container.form.fields.14')}</h3>
                                    <div className='mt-2 text-sm text-red-700'>
                                        <ul role='list' className='list-disc space-y-1 pl-5'>
                                            {Object.values(formik.errors).map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                    {error && (
                        <div className='rounded-md bg-red-50 p-4 my-2'>
                            <div className='flex'>
                                <div className='flex-shrink-0'>
                                    <XCircleIcon className='h-5 w-5 text-red-400' aria-hidden='true' />
                                </div>
                                <div className='ml-3 '>
                                    <h3 className='text-sm font-medium text-red-800'> {error}</h3>

                                </div>
                            </div>
                        </div>

                    )}

                    <div className='flex justify-end'>
                        <button
                            type='submit'
                            disabled={loading}
                            className={'rounded-md bg-bg450-logo px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled'}
                        >
                            {t('account.ticket.container.form.fields.15')}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}