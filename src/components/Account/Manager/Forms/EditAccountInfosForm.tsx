import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import editAccountInformations from '../../../../api/account/editAccountInformations';
import { fetcher } from '../../../../api/http';
import Loading from '../../../Elements/Loading';
import { config } from '../../../../config/config';
import { useDark } from '../../../../App';
import Field from '../../../Elements/Form/Field';
import { useTranslation } from 'react-i18next';

const form = object({
    society: string().nullable(),
    address: string().required(''),
    city: string().required(''),
    firstname: string().required(''),
    lastname: string().required(''),
    postalcode: string()
        .required(''),
});
export default function EditAccountInfosForm({
    setAddress,
}: {
  setAddress?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [error, setError] = useState('');
    const {dark} = useDark();
    const { t } = useTranslation();

    const {
        data,
        error: erros,
        isLoading,
        mutate,
    } = useSWR(`${config.privateapilink}/account/getinfos`, fetcher);
    useEffect(() => {
        async function fetchRegion(data: {
      country_name: any;
      data: {
        country: React.SetStateAction<string>;
        country_name: React.SetStateAction<string>;
        region: React.SetStateAction<string>;
        data: { region: string };
      };
      region: any;
    }) {
            const response = await fetch('https://ipapi.co/json/');
            const responseData = await response.json();
            setCountry(
                responseData.country_name && data.data.country === ''
                    ? responseData.country_name
                    : data.data.country !== ''
                        ? data.data.country
                        : ''
            );
            setRegion(
                responseData.region && data.data.region === ''
                    ? responseData.region
                    : data.data.region !== ''
                        ? data.data.region
                        : ''
            );
        }
        if (data && !erros && !isLoading) {
            formik.setValues({
                society: data.data.society,
                address: data.data.address ? data.data.address : '',
                city: data.data.city ? data.data.city : '',
                postalcode: data.data.postal_code ? data.data.postal_code : '',
                lastname: data.data.lastname ? data.data.lastname : '',
                firstname: data.data.firstname ? data.data.firstname : '',
            });
            setCountry(data.data.country);
            setRegion(data.data.region);
            fetchRegion(data);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleCountryChange = (value: React.SetStateAction<string>) => {
        setCountry(value);
    };

    const handleRegionChange = (value: React.SetStateAction<string>) => {
        setRegion(value);
    };

    const formik = useFormik({
        initialValues: {
            society: '',
            address: '',
            city: '',
            postalcode: '',
            firstname: '',
            lastname: '',
        },
        validationSchema: form,
        onSubmit: (values) => {
            setLoading(true);
            if (region === '' || !region) {
                setError(t('account.form2.error1'));
                setLoading(false);
                return;
            }
            if (country === '' || !country) {
                setError(t('account.form2.error2'));
                setLoading(false);
                return;
            }
            setError('');
            editAccountInformations(
                values.society,
                values.address,
                values.city,
                region,
                values.postalcode,
                country,
                values.firstname,
                values.lastname
            )
                .then((data) => {
                    if (data.data['status'] === 'error') {
                        toast.error(data.data['message'], {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: dark ? 'dark' : 'light',
                        });
                        setLoading(false);
                    } else {
                        mutate();
                        toast.success(t('account.form2.toast.1'), {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: dark ? 'dark' : 'light',
                        });
                        setLoading(false);
                        if (setAddress) {
                            setAddress(false);
                        }
                    }
                    setLoading(false);
                })
                .catch(() => {
                    toast.error(
                        t('account.utils.errormessage'),
                        {
                            position: 'bottom-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: dark ? 'dark' : 'light',
                        }
                    );
                    setLoading(false);
                });
        },
    });
    if (!data || error || isLoading) {
        return <Loading />;
    }
    return (

        <form
            onSubmit={formik.handleSubmit}
            className={`${dark ? 'bg-bg450-dark' : 'bg-white'}  shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2`}
        >
            <div className="px-4 py-6 sm:p-8">
                <div
                    className={
                        error === ''
                            ? 'hidden alert alert-warning shadow-lg'
                            : 'flex my-4 alert alert-warning shadow-lg'
                    }
                >
                    <div>
                        <svg
                            xmlns="https://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{error}</span>
                    </div>
                </div>
                <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <Field className='sm:col-span-3' name={t('account.form2.field.firstname')} id={'firstname'} type={'text'} required
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.firstname ? data.data.firstname : ''} />
                    <Field className='sm:col-span-3' name={t('account.form2.field.lastname')} id={'lastname'} type={'text'} required
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.lastname ? data.data.lastname : ''} />
                    <Field className='col-span-full' name={t('account.form2.field.company')} id={'society'} type={'text'}
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.society ? data.data.society : ''} />
                    <div className=' sm:col-span-3'>
                        <label htmlFor='country'
                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `}>
                            {t('account.form2.field.country')}
                        </label>
                        <div className='mt-2'>
                            <CountryDropdown
                                id='country'
                                name='country'
                                value={country}
                                onChange={handleCountryChange}
                                disabled={loading}
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}

                            />

                        </div>
                    </div>
                    <div className='sm:col-span-3'>
                        <label htmlFor='region'
                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `}>
                            {t('account.form2.field.region')}
                        </label>
                        <div className='mt-2'>
                            <RegionDropdown
                                id='region'
                                name='region'
                                country={country}
                                value={region}
                                onChange={handleRegionChange}
                                disabled={loading}
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                            />
                        </div>
                    </div>
                    <Field className='sm:col-span-2' name={t('account.form2.field.street')} id={'address'} type={'text'} required
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.address ? data.data.address : ''} />
                    <Field className='sm:col-span-2' name={t('account.form2.field.city')} id={'city'} type={'text'} required
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.city ? data.data.city : ''} />
                    <Field className='sm:col-span-2' name={t('account.form2.field.zip')} id={'postalcode'} type={'text'} required
                        onChange={formik.handleChange} disabled={loading}
                        defaultValue={data.data.postal_code ? data.data.postal_code : ''} />
                </div>
            </div>
            <div
                className={`${dark ? 'border-b450-logo' : 'border-gray-900/10'} flex items-center justify-end gap-x-6 border-t px-4 py-4 sm:px-8`}>
                <button type='button'
                    className={`${dark ? 'text-slate-300' : 'text-gray-900'} text-sm font-semibold leading-6`}>
                    {t('account.form2.field.button1')}
                </button>
                <button
                    type='submit'
                    disabled={
                        loading || formik.errors.postalcode
                            ? true
                            : formik.errors.address
                                ? true
                                : formik.errors.city
                                    ? true
                                    : formik.errors.firstname
                                        ? true
                                        : !!formik.errors.lastname
                    }
                    className="rounded-md bg-bg450-logo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled"
                >
                    {t('account.form2.field.save')}
                </button>
            </div>
        </form>

    );
}
