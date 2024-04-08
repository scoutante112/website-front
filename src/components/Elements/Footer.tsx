import { Link } from 'react-router-dom';
import { useDark } from '../../App';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

export default function Footer() {
    const { dark } = useDark();
    const { t } = useTranslation();
    const lang = Cookies.get('lang') || navigator.language.split('-')[0];
    return (
        <footer className={`${dark ? 'bg-bg450-dark' : 'bg-white'} w-full border-t border-gray-900/10`}
                aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
                Footer
            </h2>
            <div className='mx-auto  px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                    <div className='space-y-8'>
                        <img
                            loading={'lazy'}
                            sizes='(max-width: 1400px) 100vw, 1400px'
                            src='https://cdn.bagou450.com/assets/img/logo/small/Logo_Bagou450.svg'
                            className='h-16 w-16'
                            height={'1400px'}
                            width={'1400px'}
                            alt='Logo Bagou450' />
                        <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-6`}>
                            Bagou450<br />{t('footer.sysadmin')}<br />{t('footer.addons')}<br />
                            <img loading={'lazy'} height={'38px'} width={'185px'}
                                 src={'https://cdn.bagou450.com/assets/img/illustration/payment-gateway.webp'}
                                 alt={'Payment gateway'} />
                        </p>
                        {/*<div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>*/}
                    </div>
                    <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6 p-2 lg:p-0`}>{t('footer.legal.title')}</h3>
                                <ul role='list' className='mt-6 space-y-4'>

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={`/${lang}/tos`}
                                              onClick={() => window.scrollTo(0, 0)}
                                              className='link link-hover p-2 lg:p-0'>{t('footer.legal.terms')}</Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={`/${lang}/pp`}
                                              onClick={() => window.scrollTo(0, 0)}
                                              className='link link-hover p-2 lg:p-0'>{t('footer.legal.privacy')}</Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={`/${lang}/rp`} className='p-2 lg:p-0 link link-hover'
                                              onClick={() => window.scrollTo(0, 0)}>
                                            {t('footer.legal.refund')}</Link></li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={`/${lang}/lm`}
                                              onClick={() => window.scrollTo(0, 0)}
                                              className='link link-hover p-2 lg:p-0'> {t('footer.legal.legal')}</Link>
                                    </li>


                                </ul>
                            </div>
                            <div className={'hidden md:inline-grid'}>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>{t('footer.products.title')}</h3>
                                <ul role='list' className='mt-6 space-y-4'>

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)}
                                              to={`/${lang}/product/pterodactyl/addons/minecraft/minecraft-versions-changer`}
                                              className='link link-hover'>
                                            {t('footer.products.changer')}
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)}
                                              to={`/${lang}/product/pterodactyl/addons/minecraft/minecraft-plugins-installer`}
                                              className='link link-hover'>
                                            {t('footer.products.plugins')}
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)}
                                              to={`/${lang}/product/pterodactyl/addons/minecraft/minecraft-mods-installer`}
                                              className='link link-hover'>
                                            {t('footer.products.mods')}
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)}
                                              to={`/${lang}/product/pterodactyl/addons/management/cloud-servers`}
                                              className=' link link-hover'>
                                            {t('footer.products.cloud')}
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)}
                                              to={`/${lang}/product/pterodactyl/addons/fivem/artifacts-changer`}
                                              className='link link-hover'>
                                            {t('footer.products.artifacts')}
                                        </Link>
                                    </li>


                                </ul>
                            </div>

                        </div>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6 p-2 lg:p-0`}>{t('footer.support.title')}</h3>
                                <ul role='list' className='mt-6 space-y-4'>

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={`/${lang}/contact`}
                                              className='link link-hover p-2 lg:p-0'>
                                            {t('footer.support.support')}
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'https://help.bagou450.com'} rel={'noreferrer'} target={'_blank'}
                                           className='link link-hover p-2 lg:p-0'>
                                            {t('footer.support.knowledge')}
                                        </a>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'https://status.bagou450.com'} className='link link-hover p-2 lg:p-0'>
                                            {t('footer.support.status')}
                                        </Link>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'https://haste.bagou450.com'} className='link link-hover p-2 lg:p-0'>
                                            {t('footer.support.haste')}
                                        </Link>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'https://upload.bagou450.com'} className='link link-hover p-2 lg:p-0'>
                                            {t('footer.support.plik')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={'hidden md:inline-grid'}>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>{t('footer.about.title')}</h3>
                                <ul role='list' className='space-y-4'>

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'https://builtbybit.com/creators/bagou450.187451/'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            {t('footer.about.bbb')}
                                        </a>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={`/${lang}/blog`}
                                              className='link link-hover'>
                                            {t('footer.about.blog')}
                                        </Link>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>

                                        <a href={'https://www.youtube.com/@bagou450developement8'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            {t('footer.about.youtube')}
                                        </a>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'#'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            {t('footer.about.hosting')}
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
                <div className=' border-t border-gray-900/10 sm:mt-20 lg:mt-24'>
                </div>
            </div>
            <p className={`${dark ? 'bg-bg450-dark text-gray-300' : 'bg-white'} text-center pb-2  w-full`}>©
                2022 - {new Date().getFullYear()} Bagou450. {t('footer.rights')}<br />{t('footer.affiliated')}</p>
        </footer>
    );
}