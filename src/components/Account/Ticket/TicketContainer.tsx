import React, { Fragment, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetcher } from '../../../api/http';

import Loading from '../../Elements/Loading';
import { Account } from '../Manager/Forms/EditAccountForm';
import { debounce } from 'debounce';
import { config } from '../../../config/config';
import { NavContext } from '../AccountRouter';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { classNames } from '../../NavBar';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import CreateTicketForm from './CreateTicketForm';
import TicketRow from './TicketRow';
import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';

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
            subname: ''
        },
        {
            name: t('account.ticket.container.status.2'),
            value: 'asc_modified',
            subname: t('account.ticket.container.status.3')
        },
        {
            name: t('account.ticket.container.status.2'),
            value: 'desc_modified',
            subname: t('account.ticket.container.status.4')
        },
        {
            name: t('account.ticket.container.status.5'),
            value: 'asc_created',
            subname: t('account.ticket.container.status.3')
        },
        {
            name: t('account.ticket.container.status.5'),
            value: 'desc_created',
            subname: t('account.ticket.container.status.4')
        },
    ];
    document.title = `Bagou450 - ${t('account.ticket.container.title')}`;

    const [sort, setSort] = useState<string>('status');
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const {dark} = useDark();
    const [open, setOpen] = useState<boolean>(false);

    const { setActive } = useContext(NavContext);
    useEffect(() => {
        setActive(window.location.pathname);
    }, []);

    const { data, mutate, error: error3, isLoading } = useSWR(
        `${config.privateapilink}/tickets?sort=${sort}&page=${page}&search=${search}`,
        fetcher
    );
    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
        `${config.privateapilink}/auth/isLogged?infos=true`,
        fetcher
    );

    if ((!data || (error3 || isLoading)) || (!data2 || (error2 || isLoading2))) {

        if(data2) {
            if (!data2.status) {
                return <></>;
            }
            return (
                <>
                    <section >

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

                            </div>
                            {open && (
                                <CreateTicketForm mutate={mutate} account={account} setOpen={setOpen} />
                            )}
                            <div className="mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2">
                                <div className={' lg:col-span-3'}>
                                    <label htmlFor="search" className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                                        {t('account.utils.search')}
                                    </label>
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        onChange={(e) => searchValue(e.target.value)}
                                        className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                        placeholder={t('account.utils.search').toUpperCase()}
                                    />
                                </div>
                                <Listbox value={sort} onChange={setSort}>
                                    {({ open }) => (
                                        <>
                                            <div className="relative mt-auto col-span-2 lg:col-span-1">
                                                <Listbox.Button className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`}>
                                                    <span className="inline-flex w-full truncate">
                                                        <span className="truncate">{sortType.find((item) => item.value === sort).name}</span>
                                                        <span className="ml-2 truncate text-gray-500">{sortType.find((item) => item.value === sort).subname}</span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className={`${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>

                                                        {sortType.map((sortTyp) => (
                                                            <Listbox.Option
                                                                key={sortTyp.name}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white'
                                                                            : dark ? 'text-slate-200' : 'text-gray-900',
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={sortTyp.value}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className="flex">
                                                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                                {sortTyp.name}
                                                                            </span>
                                                                            <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                                {sortTyp.subname}
                                                                            </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-bg450-logo',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                    </div>
                    {open && (
                        <CreateTicketForm mutate={mutate} account={account} setOpen={setOpen}/>
                    )}
                    <div className="mt-10 w-full mb-2 grid grid-cols-3 lg:grid-cols-4 gap-x-2">
                        <div className={' lg:col-span-3'}>
                            <label htmlFor="search" className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6`}>
                                {t('account.utils.search')}
                            </label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                onChange={(e) => searchValue(e.target.value)}
                                className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-insetfocus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                                placeholder={t('account.utils.search').toUpperCase()}
                            />
                        </div>
                        <Listbox value={sort} onChange={setSort}>
                            {({ open }) => (
                                <>
                                    <div className="relative mt-auto col-span-2 lg:col-span-1">
                                        <Listbox.Button className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'} relative w-full mt-1 cursor-default rounded-md py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-bg450-logo sm:text-sm sm:leading-6`}>
                                            <span className="inline-flex w-full truncate">
                                                <span className="truncate">{sortType.find((item) => item.value === sort).name}</span>
                                                <span className="ml-2 truncate text-gray-500">{sortType.find((item) => item.value === sort).subname}</span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className={`${dark ? 'bg-bg450-inputdark text-slate-300' : 'bg-white'} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>

                                                {sortType.map((sortTyp) => (
                                                    <Listbox.Option
                                                        key={sortTyp.name}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active ? dark ? 'bg-bg450-logo text-white' : 'bg-indigo-600 text-white'
                                                                    : dark ? 'text-slate-200' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                        }
                                                        value={sortTyp.value}
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                                <div className="flex">
                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                        {sortTyp.name}
                                                                    </span>
                                                                    <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                        {sortTyp.subname}
                                                                    </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'text-white' : 'text-bg450-logo',
                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                    {data.data.data.length > 0 ?
                        <div className="-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold hidden lg:table-cell sm:pl-6`}>
                                            {t('account.ticket.container.table.1')}
                                        </th>
                                        <th
                                            scope="col"
                                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`}
                                        >
                                            {t('account.ticket.container.table.2')}
                                        </th>
                                        <th
                                            scope="col"
                                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`}
                                        >
                                            {t('account.ticket.container.table.3')}
                                        </th>
                                        <th
                                            scope="col"
                                            className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`}
                                        >
                                            {t('account.ticket.container.table.4')}
                                        </th>
                                        <th scope="col" className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`}>
                                            {t('account.ticket.container.table.5')}
                                        </th>
                                        <th scope="col" className={`${dark ? 'text-slate-200' : 'text-gray-900'}  relative py-3.5 pl-3 pr-4 sm:pr-6 hidden lg:table-cell`}>
                                            <span className="sr-only">{t('account.ticket.container.table.6')}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.data.map((ticket: Ticket, key: React.Key | null | undefined) => (
                                        <TicketRow ticket={ticket} key={key}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        :
                        <p className={`text-center ${dark ? 'text-slate-200' : 'text-black'} opacity-80`}>{t('account.ticket.container.table.7')}</p>
                    }
                    <div className={'flex w-full max-w-7xl mx-auto'}>
                        {page > 1 &&
              <p className={`relative inline-flex items-center mt-2 rounded-md bg-indigo-600 px-1.5 py-1 text-white ${isLoading || isLoading2 && 'opacity-50'}  hover:bg-indigo-500 focus:z-10`} onClick={() => {window.scrollTo(0, 0); setPage(page - 1);}}>{t('account.utils.pagination.previous')}</p>
                        }
                        {page < data.data.last_page &&
              <p                                 className={`relative ml-auto mt-2 inline-flex items-center rounded-md bg-indigo-600 px-1.5 py-1 text-white ${isLoading || isLoading2 && 'opacity-50'}  hover:bg-indigo-500 focus:z-10`}
                  onClick={() => {window.scrollTo(0, 0); setPage(page + 1);}}>{t('account.utils.pagination.next')}</p>
                        }
                    </div>
                </div>
            </section>
            <section className='min-h-screen'></section>
        </>
    );
}
