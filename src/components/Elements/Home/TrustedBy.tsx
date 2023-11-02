import React from 'react';
import { useDark } from '../../../App';


export default function TrustedBy() {
    const {dark} = useDark();
    return (
        <div className={'pb-24 sm:pb-32'}>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-900'} text-lg font-display text-base text-center`}>
                Trusted by these six companies so far
            </p>
            <ul
                role="list"
                className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
                {[
                    [
                        {
                            name: 'Ozlaloc',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/ozlaloc.webp',
                            link: 'https://ozlaloc.fr'
                        },
                        {
                            name: 'ServerEasy',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/ServerEasy.webp',
                            link: 'https://servereasy.it'
                        },
                        {
                            name: 'CapriceHost',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/capricehost.webp',
                            link: 'https://capricehost.com'
                        },
                    ],
                    [
                        {
                            name: 'OnPowered',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/powered.webp',
                            link: 'https://onpowered.net'
                        },
                        {
                            name: 'Laravel',
                            logo: 'https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg',
                            link: 'https://capricehost.com'
                        },
                        {
                            name: 'Statamic',
                            logo: 'https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg',
                            link: 'https://capricehost.com'
                        },
                    ],
                ].map((group, groupIndex) => (
                    <li key={groupIndex}>
                        <ul
                            role="list"
                            className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                        >
                            {group.map((company) => (

                                <li key={company.name} className='flex'>
                                    <a href={company.link} rel={'noreferrer'} target={'_blank'}>
                                        <img src={company.logo} alt={company.name} />
                                    </a>
                                </li>

                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}