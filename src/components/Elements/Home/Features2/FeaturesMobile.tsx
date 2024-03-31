import { useDark } from '../../../../App';
import { CommandLineIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import { Feature2, FeatureM } from '../Features2';
import { useTranslation } from 'react-i18next';



export default function FeaturesMobile() {
    const {dark} = useDark();
    const { t } = useTranslation();

    const features2: Array<Feature2> = [
        {
            name: t('features2.feature1.title'),
            summary: t('features2.feature1.summary'),
            description: t('features2.feature1.description'),
            image: 'https://cdn.bagou450.com/assets/img/presentation/bagoucenter.webp',
            height: '939',
            width: '1920',
            icon: CommandLineIcon
        },
        {
            name: t('features2.feature2.title'),
            summary: t('features2.feature2.summary'),
            description: t('features2.feature2.description'),
            image: dark ? 'https://cdn.bagou450.com/assets/img/presentation/autoinstaller_dark.webp' : 'https://cdn.bagou450.com/assets/img/presentation/autoinstaller_light.webp',
            height: '964',
            width: '1920',
            icon: CogIcon
        },
        {
            name: t('features2.feature3.title'),
            summary: t('features2.feature3.summary'),
            description: t('features2.feature3.description'),
            image: dark ? 'https://cdn.bagou450.com/assets/img/presentation/dashboard_dark.webp' : 'https://cdn.bagou450.com/assets/img/presentation/dashboard_white.webp',
            height: '939',
            width: '1920',
            icon: WrenchIcon
        },
    ];
    return (
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            {features2.map((feature: Feature2) => (
                <div key={feature.summary}>
                    <FeatureM feature={feature} className="mx-auto max-w-2xl" isActive isDesktop={false} />
                    <div className="relative mt-10 pb-10">
                        <div className={`absolute -inset-x-4 bottom-0 top-8 ${dark ? 'bg-bg450-dark' : 'bg-white'} sm:-inset-x-6`} />
                        <div
                            className={`relative mx-auto overflow-hidden rounded-xl shadow-lg  ring-1 ${dark ? 'bg-bg450-inputdark shadow-bg450-inputdark ring-bg450-inputdark' : 'bg-white shadow-slate-900/5 ring-slate-500/10'}`}>
                            <img
                                loading={'lazy'}
                                className="w-full"
                                src={feature.image}
                                alt={feature.name ? feature.name : 'Img'}
                                sizes="52.75rem"
                                height={feature.height}
                                width={feature.width}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
