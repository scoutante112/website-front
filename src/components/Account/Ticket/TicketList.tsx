import { h, Key } from 'preact';
import TicketRow from './TicketRow';
import { Ticket } from './TicketContainer';
import { useTranslation } from 'react-i18next';
import { useDark } from '../../../App';

export default function TicketList({data}: {data: any}) {
    const { t } = useTranslation();
    const { dark } = useDark();
    return (
        data.data.data.length > 0 ?
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
                                {t('account.ticket.container.table.3')}
                            </th>
                            <th
                                scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 table-cell`}
                            >
                                {t('account.ticket.container.table.4')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'} px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell`}>
                                {t('account.ticket.container.table.5')}
                            </th>
                            <th scope='col'
                                className={`${dark ? 'text-slate-200' : 'text-gray-900'}  relative py-3.5 pl-3 pr-4 sm:pr-6 hidden lg:table-cell`}>
                                <span className='sr-only'>{t('account.ticket.container.table.6')}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.data.map((ticket: Ticket, key: Key | null | undefined) => (
                            <TicketRow ticket={ticket} key={key} />
                        ))}
                    </tbody>
                </table>
            </div>

            :
            <p className={`text-center ${dark ? 'text-slate-200' : 'text-black'} opacity-80`}>{t('account.ticket.container.table.7')}</p>
        
    );
    
}