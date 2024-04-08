import { useState } from 'preact/compat';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../../api/http';
import { config } from '../../../../config/config';
import { useDark } from '../../../../App';
import editAccountInfosNews from '../../../../api/account/editAccountInformationsNews';
import { useTranslation } from 'react-i18next';

export type Account = {
    newsletter: boolean;
}
export default function EditNewsAccoutInfosForm({ account }: { account: Account }) {
    const { dark } = useDark();
    const { t } = useTranslation();
    const [isLoading, setLoading] = useState<boolean>(false);
    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );
    const changeNewsInfos = () => {
        setLoading(true);
        editAccountInfosNews(!account.newsletter).then((data) => {
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
            } else {
                toast.success(t('account.form3.toast1'), {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
            }
            setLoading(false);
            mutate();
        }).catch(() => {
            toast.error(t('account.utils.errormessage'), {
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
        });

    };
    return (
        <div className='px-4 py-6 sm:p-8'>
            <div className={`${isLoading && 'opacity-75'} relative flex items-start`} onClick={changeNewsInfos}>
                <div className='flex h-6 items-center'>
                    <input
                        id='news'
                        aria-describedby='news-description'
                        name='news'
                        checked={account.newsletter}
                        disabled={isLoading}
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                </div>
                <div className='ml-3 text-sm leading-6'>
                    <label htmlFor='news' className={dark ? 'font-medium text-slate-200' : 'font-medium text-gray-900'}>
                        {t('account.form3.title')}
                    </label>
                    <p id='news-description' className='text-gray-500'>
                        {t('account.form3.desc')}
                    </p>
                </div>
            </div>
        </div>

    );
}
