import { Fragment, useContext, useEffect, useState } from 'preact/compat';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';

import Loading from '../../Elements/Loading';
import { Account } from '../Manager/Forms/EditAccountForm';
import { debounce } from 'debounce';
import { config } from '../../../config/config';
import { NavContext } from '../AccountRouter';
import { Listbox, Switch, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { classNames } from '../../NavBar';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import CreateTicketForm from './CreateTicketForm';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';
import { h } from 'preact';
import TicketList from './TicketList';
import TicketListDiscord from './TicketListDiscord';

export interface Ticket {
    created_at: string;
    discord_id: string;
    discord_user_id: string;
    id: number;
    license: string;
    logs_url: string;
    name: string;
    priority: string;
    status: string;
    updated_at: string;
    user_id: number;
}
export interface TicketDiscord {
    ID: number,
    Name: string,
    Status: string,
    License: string,
    Logs: string,
    ChannelId: string,
    Owner: {
        DiscordID: string;
        Username: string;
        Avatar: string;
    }
}
interface Sort {
    name: string;
    value: string;
    subname: string;
}

export default function TicketContainer() {
    const { t } = useTranslation();
    const sortType: Sort[] = [
        {
            name: t('account.ticket.container.status.1'),
            value: 'status',
            subname: '',
        },
        {
            name: t('account.ticket.container.status.2'),
            value: 'asc_modified',
            subname: t('account.ticket.container.status.3'),
        },
        {
            name: t('account.ticket.container.status.2'),
            value: 'desc_modified',
            subname: t('account.ticket.container.status.4'),
        },
        {
            name: t('account.ticket.container.status.5'),
            value: 'asc_created',
            subname: t('account.ticket.container.status.3'),
        },
        {
            name: t('account.ticket.container.status.5'),
            value: 'desc_created',
            subname: t('account.ticket.container.status.4'),
        },
    ];
    document.title = `Bagou450 - ${t('account.ticket.container.title')}`;

    const [sort, setSort] = useState<string>('status');
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const { dark } = useDark();
    const [open, setOpen] = useState<boolean>(false);
    const [discord, setDiscord] = useState<boolean>(false);
    const { setActive } = useContext(NavContext);
    useEffect(() => {
        setActive(window.location.pathname);
    }, []);

    const { data, mutate, error: error3, isLoading } = useSWR(
        `${config.privateapilink}/tickets?sort=${sort}&page=${page}&search=${search}&discord=${discord}`,
        fetcher,
    );
    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher,
    );

    if ((!data || (error3 || isLoading)) || (!data2 || (error2 || isLoading2))) {

        if (data2) {
            if (!data2.status) {
                return <></>;
            }
            return (
                <>
                    <section>

                        <div className='px-4 sm:px-6 lg:px-8'>

                            <div className='sm:flex sm:items-center'>
                                <div className='sm:flex-auto'>
                                    <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>{t('account.ticket.container.title')}</h1>
                                    <p className={`${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `}>

                                        {t('account.utils.youare')} <strong
                                            className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`}>{t('account.ticket.container.title').toLowerCase()}</strong> {t('account.utils.page')}
                                        {t('account.ticket.container.desc')}
                                    </p>
                                </div>

                                <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                                    <button
                                        type='button'
                                        onClick={() => setOpen(!open)}
                                        className='flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative'
                                    >
                                        {t('account.ticket.container.button.1')}
                                        <ArrowDownCircleIcon
                                            className={`mx-2 h-5 w-5 my-auto transform transition-transform ${
                                                open ? 'rotate-180' : 'rotate-0'
                                            }`}

                                        />

                                    </button>
                                </div>
                                <div className='flex gap-x-2 mt-2'>
                                    <p className={dark ? 'text-slate-200' : 'text-black'}>Discord ticket</p>
                                    <Switch
                                        checked={discord}
                                        onChange={setDiscord}
                                        className='group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                    >
                                        <span className='sr-only'>Discord ticket</span>
                                        <span aria-hidden='true'
                                            className='pointer-events-none absolute h-full w-full rounded-md' />
                                        <span
                                            aria-hidden='true'
                                            className={classNames(
                                                discord ? 'bg-indigo-600' : 'bg-gray-200',
                                                'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
                                            )}
                                        />
                                        <span
                                            aria-hidden='true'
                                            className={classNames(
                                                discord ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
                                            )}
                                        />
                                    </Switch>
                                </div>

                            </div>

                            <div className='mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2'>
                                <div className={' lg:col-span-3'}>
                                    <label htmlFor='search'
                                        className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                                        {t('account.utils.search')}
                                    </label>
                                    <input
                                        type='text'
                                        name='search'
                                        id='search'
                                        onChange={(e) => searchValue(e.target ? (e.target as HTMLInputElement).value : '')}
                                        className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                        placeholder={t('account.utils.search').toUpperCase()}
                                    />
                                </div>
                                <Listbox value={sort} onChange={setSort}>
                                    {({ open }) => (
                                        <>
                                            <div className='relative mt-auto col-span-2 lg:col-span-1'>
                                                <Listbox.Button
                                                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`}>
                                                    <span className='inline-flex w-full truncate'>
                                                        {(() => {
                                                            const foundItem = sortType.find((item) => item.value === sort);
                                                            return foundItem ? (<>
                                                                <span
                                                                    className='truncate'>{foundItem.name}</span>
                                                                <span
                                                                    className='ml-2 truncate text-gray-500'>{foundItem.subname}</span></>
                                                            ) : '';
                                                        })()}
                                                    </span>
                                                    <span
                                                        className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                                        <ChevronUpDownIcon className='h-5 w-5 text-gray-400'
                                                            aria-hidden='true' />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave='transition ease-in duration-100'
                                                    leaveFrom='opacity-100'
                                                    leaveTo='opacity-0'
                                                >
                                                    <Listbox.Options
                                                        className={`${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>

                                                        {sortType.map((sortTyp) => (
                                                            <Listbox.Option
                                                                key={sortTyp.name}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white'
                                                                            : dark ? 'text-slate-200' : 'text-gray-900',
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                    )
                                                                }
                                                                value={sortTyp.value}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className='flex'>
                                                                            <span
                                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                                {sortTyp.name}
                                                                            </span>
                                                                            <span
                                                                                className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                                {sortTyp.subname}
                                                                            </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-bg450-logo',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                )}
                                                                            >
                                                                                <CheckIcon className='h-5 w-5'
                                                                                    aria-hidden='true' />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>


                            </div>
                        </div>
                    </section>
                    <section className='min-h-screen'><Loading /></section>
                </>

            );

        }
        return <Loading />;
    }
    if (!data2.status) {
        return <></>;
    }
    const account: Account = data2.data;


    const searchValue = debounce((value: string) => {
        setSearch(value);
        setPage(1);
    }, 500);
    return (
        <>
            <section>
                <div className='px-4 sm:px-6 lg:px-8'>

                    <div className='sm:flex sm:items-center'>
                        <div className='sm:flex-auto'>
                            <h1 className={`${dark ? 'text-slate-200' : 'text-gray-900'} text-base font-semibold leading-6`}>Tickets</h1>
                            <p className={`${dark ? 'text-slate-300' : 'text-gray-900'} mt-2 text-sm `}>

                                {t('account.utils.youare')} <strong
                                    className={`font-semibold ${dark ? 'text-slate-200' : 'text-gray-600'}`}>{t('account.ticket.container.title').toLowerCase()}</strong> {t('account.utils.page')}
                                {t('account.ticket.container.desc')}
                            </p>
                        </div>

                        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                            <button
                                type='button'
                                onClick={() => setOpen(!open)}
                                className=' mx-auto flex rounded-md bg-bg450-logo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-bg450-logohover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg450-logodisabled relative'
                            >
                                {t('account.ticket.container.button.1')}
                                <ArrowDownCircleIcon
                                    className={`mx-2 h-5 w-5 my-auto transform transition-transform ${
                                        open ? 'rotate-180' : 'rotate-0'
                                    }`}

                                />

                            </button>
                            <div className='flex gap-x-2 mt-2'>
                                <p className={dark ? 'text-slate-200' : 'text-black'}>Discord ticket</p>
                                <Switch
                                    checked={discord}
                                    onChange={setDiscord}
                                    className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Discord ticket</span>
                                    <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md" />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            discord ? 'bg-indigo-600' : 'bg-gray-200',
                                            'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                                        )}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            discord ? 'translate-x-5' : 'translate-x-0',
                                            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
                                        )}
                                    />
                                </Switch>
                            </div>
                        </div>

                    </div>
                    {open && (
                        <CreateTicketForm mutate={mutate} account={account} setOpen={setOpen} />
                    )}
                    <div className='mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2'>
                        <div className={' lg:col-span-3'}>
                            <label htmlFor='search'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                                {t('account.utils.search')}
                            </label>
                            <input
                                type='text'
                                name='search'
                                id='search'
                                onChange={(e) => searchValue(e.target ? (e.target as HTMLInputElement).value : '')}
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                placeholder={t('account.utils.search').toUpperCase()}
                            />
                        </div>

                        <Listbox value={sort} onChange={setSort}>
                            {({ open }) => (
                                <>
                                    <div className='relative mt-auto col-span-2 lg:col-span-1'>
                                        <Listbox.Button
                                            className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`}>
                                            <span className='inline-flex w-full truncate'>
                                                {(() => {
                                                    const foundItem = sortType.find((item) => item.value === sort);
                                                    return (
                                                        <>
                                                            <span
                                                                className='truncate'>{foundItem ? foundItem.name : ''}</span>
                                                            <span
                                                                className='ml-2 truncate text-gray-500'>{foundItem ? foundItem.subname : ''}</span>
                                                        </>

                                                    );

                                                })()}

                                            </span>
                                            <span
                                                className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                                <ChevronUpDownIcon className='h-5 w-5 text-gray-400'
                                                    aria-hidden='true' />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave='transition ease-in duration-100'
                                            leaveFrom='opacity-100'
                                            leaveTo='opacity-0'
                                        >
                                            <Listbox.Options
                                                className={`${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>

                                                {sortType.map((sortTyp) => (
                                                    <Listbox.Option
                                                        key={sortTyp.name}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white'
                                                                    : dark ? 'text-slate-200' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                                            )
                                                        }
                                                        value={sortTyp.value}
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                                <div className='flex'>
                                                                    <span
                                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                        {sortTyp.name}
                                                                    </span>
                                                                    <span
                                                                        className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                        {sortTyp.subname}
                                                                    </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'text-white' : 'text-bg450-logo',
                                                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                        )}
                                                                    >
                                                                        <CheckIcon className='h-5 w-5'
                                                                            aria-hidden='true' />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>


                    </div>
                    {discord ?
                        <TicketListDiscord data={data}/>

                        :
                        <TicketList data={data}/>

                    }
                    {!discord && (
                        <div className={'flex w-full max-w-7xl mx-auto'}>
                            {page > 1 &&
                            <p className={`relative inline-flex items-center mt-2 rounded-md bg-indigo-600 px-1.5 py-1 text-white ${isLoading || isLoading2 && 'opacity-50'}  hover:bg-indigo-500 focus:z-10`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setPage(page - 1);
                                }}>{t('account.utils.pagination.previous')}</p>
                            }
                            {page < data.data.last_page &&
                            <p className={`relative ml-auto mt-2 inline-flex items-center rounded-md bg-indigo-600 px-1.5 py-1 text-white ${isLoading || isLoading2 && 'opacity-50'}  hover:bg-indigo-500 focus:z-10`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setPage(page + 1);
                                }}>{t('account.utils.pagination.next')}</p>
                            }
                        </div>
                    )}
                </div>
            </section>
            <section className='min-h-screen'></section>
        </>
    );
}
