import { useDark } from '../../../App';
import { useTranslation } from 'react-i18next';

export default function TrustedBy() {
    const { dark } = useDark();
    const { t } = useTranslation();

    return (
        <div className={'pb-24 sm:pb-32'}>
            <p className={`${dark ? 'text-slate-400' : 'text-slate-900'} text-lg font-display text-center`}>
                {t('trustedby')}
            </p>
            <ul
                role='list'
                className='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
            >
                {[
                    [
                        {
                            name: 'Ozlaloc',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/ozlaloc.svg',
                            link: 'https://ozlaloc.fr',
                        },
                        {
                            name: 'ServerEasy',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/ServerEasy.svg',
                            link: 'https://servereasy.it',
                        },
                        {
                            name: 'CapriceHost',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/CapriceHost.svg',
                            link: 'https://capricehost.com',
                        },
                    ],
                    [
                        {
                            name: 'OnPowered',
                            logo: 'https://cdn.bagou450.com/assets/img/trustus/powered.svg',
                            link: 'https://onpowered.net',
                        },
                    ],
                ].map((group, groupIndex) => (
                    <li key={groupIndex}>
                        <ul
                            role='list'
                            className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
                        >
                            {group.map((company) => (

                                <li key={company.name} className='flex'>
                                    <a href={company.link} rel={'noreferrer'} target={'_blank'}
                                       aria-label={company.link}>

                                        <svg className='h-32 w-32'>
                                            <image className='h-32 w-32'
                                                   xlinkHref={company.logo}
                                                   src={`${company.logo.slice(0, company.logo.length - 3)}.png`} />
                                        </svg>
                                    </a>

                                </li>

                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}