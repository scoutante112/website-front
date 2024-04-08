import { useEffect } from 'preact/compat';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../api/http';
import tokenLogin from '../../api/auth/tokenLogin';
import { toast } from 'react-toastify';
import Loading from '../Elements/Loading';
import { config } from '../../config/config';
import { useDark } from '../../App';

export default function TokenLogin() {
    const { token } = useParams();
    const navigate = useNavigate();
    const { dark } = useDark();
    const { mutate } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );
    if (!token) {
        navigate('/');
        return <></>;
    }
    useEffect(() => {
        tokenLogin(token).then((data) => {
            if (data.data['status'] === 'error') {
                toast.error('Error. Can\'t get your account data with this token.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                return navigate('/');
            } else {
                document.cookie = `access_token=${data.data['data']['access_token']}; path=/; expires=${new Date(Date.now() + 6 * 60 * 60 * 1000).toUTCString()}`;
                toast.success('Success! Your are now logged.', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: dark ? 'dark' : 'light',
                });
                mutate();
                navigate('/');
                return <></>;
            }
        });
    }, []);
    return (
        <Loading />
    );
};

