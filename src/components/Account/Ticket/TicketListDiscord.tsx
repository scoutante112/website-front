import { h, Key } from 'preact';
import { TicketDiscord } from './TicketContainer';
import { useTranslation } from 'react-i18next';
import { useDark } from '../../../App';
import { NavLink, useNavigate } from 'react-router-dom';
import { Fragment } from 'preact/compat';

export default function TicketList({data}: {data: any}) {
    const { t } = useTranslation();
    const { dark } = useDark();
    const navigate = useNavigate();
    return (
        data.data.length > 0 ?
            <div className='-mx-4 mt-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                        <tr>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} py-3.5 pl-4 pr-3 text-left text-sm font-semibold hidden lg:table-cell sm:pl-6`}>
                                {t('account.ticket.container.table.1')}
                            </th>
                            <th
                                scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`}
                            >
                                {t('account.ticket.container.table.2')}
                            </th>
                            <th
                                scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`}
                            >
                               Channel id
                            </th>
                            <th
                                scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`}
                            >
                                {t('account.ticket.container.table.4')}
                            </th>

                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'}  relative py-3.5 pl-3 pr-4 sm:pr-6 hidden lg:table-cell`}>
                                <span className='sr-only'>{t('account.ticket.container.table.6')}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((ticket: TicketDiscord, key: Key | null | undefined) => (
                            <Fragment key={key}>
                                <tr key={ticket.ID} className={'hidden lg:table-row'}>
                                    <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm table-cell`}>
                                        <div className='font-medium'>{ticket.ID}</div>
                                    </td>
                                    <td className={`${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}
                                    >
                                        {ticket.Name}
                                    </td>
                                    <td className={' border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell text-gray-500'}>
                                        {ticket.ChannelId}
                                    </td>

                                    <td className={`border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.Status === 'closed' ? 'text-red-500' : ticket.Status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`}>
                                        {ticket.Status === 'closed' ? t('account.ticket.container.row.1') : ticket.Status === 'support_answer' ? t('account.ticket.container.row.2') : t('account.ticket.container.row.3')}
                                    </td>


                                    <td className={`${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}>
                                        <NavLink
                                            className='inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                                            to={`/account/ticket/discord/${ticket.ID}`}
                                        >
                                            {t('account.ticket.container.row.4')}
                                        </NavLink>
                                    </td>

                                </tr>
                                <tr key={ticket.ID} className={'lg:hidden cursor-pointer'}
                                    onClick={() => navigate(`/account/ticket/discord/${ticket.ID}`)}>

                                    <td className='border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell'
                                    >
                                        {ticket.Name}
                                    </td>


                                    <td className={`border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.Status === 'closed' ? 'text-red-500' : ticket.Status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`}>
                                        {ticket.Status === 'closed' ? t('account.ticket.container.row.1') : ticket.Status === 'support_answer' ? t('account.ticket.container.row.2') : t('account.ticket.container.row.3')}
                                    </td>


                                </tr></Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            :
            <p className={`text-center ${dark ? 'text-slate-200' : 'text-black'} opacity-80`}>{t('account.ticket.container.table.7')}</p>

    )
    ;

}
