// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import React from 'react';
import moment from 'moment/moment';
import { NavLink, useNavigate } from 'react-router-dom';
import { Ticket } from './TicketContainer';
import { useDark } from '../../../App';

export default function TicketRow({ticket }: {ticket: Ticket}) {
    const navigate = useNavigate();
    const {dark} = useDark();
    return (
        <>
            <tr key={ticket.id} className={'hidden lg:table-row'}>
                <td className={`${dark ? 'text-gray-400' : 'text-gray-500'} border-t border-gray-200  px-3 py-3.5 text-sm table-cell`}>
                    <div className="font-medium">{ticket.id}</div>
                </td>
                <td className={`${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}
                >
                    {ticket.name}
                </td>
                <td className={` border-t border-gray-200 px-3 py-3.5 text-sm hidden lg:table-cell ${ticket.priority === 'high' ? 'text-red-500' : ticket.priority === 'low' ? 'text-green-500' : 'text-gray-500'}`}>
                    {ticket.priority[0].toUpperCase()}{ticket.priority.slice(1, ticket.priority.length)}
                </td>

                <td className={`border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`}>
                    {ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'}
                </td>
                <td className={`${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm  table-cell`}>
                    {moment(ticket.updated_at).fromNow()}
                </td>

                <td className={`${dark ? 'text-gray-400' : 'text-gray-500'}  border-t border-gray-200 px-3 py-3.5 text-sm table-cell`}>
                    <NavLink
                        className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 mb-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        to={`/account/ticket/${ticket.id}`}
                    >
                    View
                    </NavLink>
                </td>

            </tr>
            <tr key={ticket.id} className={'lg:hidden cursor-pointer'}
                onClick={() => navigate(`/account/ticket/${ticket.id}`)}>
             
                <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 table-cell"
                >
                    {ticket.name}
                </td>
           

                <td className={`border-t border-gray-200 px-3 py-3.5 text-sm table-cell ${ticket.status === 'closed' ? 'text-red-500' : ticket.status === 'support_answer' ? 'text-green-500' : 'text-blue-500'}`}>
                    {ticket.status === 'closed' ? 'Closed' : ticket.status === 'support_answer' ? 'Answered by Support' : 'Answered by Client'}
                </td>

              

            </tr>
        </>
    );
}