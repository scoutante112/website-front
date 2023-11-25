import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDark } from '../../App';

export default function Footer() {
    const {dark} = useDark();

    return (
        <footer className={`${dark ? 'bg-bg450-dark' : 'bg-white'} w-full border-t border-gray-900/10`} aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
      Footer
            </h2>
            <div className="mx-auto  px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img
                            loading={'lazy'}
                            sizes="(max-width: 1400px) 100vw, 1400px"
                            src='https://cdn.bagou450.com/assets/img/logo/small/Logo_Bagou450.svg'
                            className="h-16 w-16"
                            height={'1400px'}
                            width={'1400px'}
                            alt="Logo Bagou450" />
                        <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-6`}>
            Bagou450<br />Provide Sysadmin service since 2016 <br />Provide Pterodactyl addons since 2020<br/>
                            <img loading={'lazy'} height={'38px'} width={'185px'} src={'https://cdn.bagou450.com/assets/img/illustration/payment-gateway.webp'} alt={'Payment gateway'}/>
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
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6 p-2 lg:p-0`}>Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/tos'} className="link link-hover p-2 lg:p-0">Terms of Service</Link>
                                    </li>
                                    
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/pp'} className="link link-hover p-2 lg:p-0">Privacy Policy </Link>
                                    </li>
                                   
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}><Link to={'/rp'} className="p-2 lg:p-0 link link-hover"> Refund Policy</Link></li>
                                    
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/lm'} className="link link-hover p-2 lg:p-0"> Legal Mention</Link>
                                    </li>
                                    

                                </ul>
                            </div>
                            <div className={'hidden md:inline-grid'}>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>Our Pterodactyl addons</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/product/minecraft-versions-changer'} className="link link-hover">
                                                Minecraft Version changer
                                        </Link>
                                    </li>
                                    

                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/product/minecraft-plugins-installer'} className="link link-hover">
                                                Minecraft Plugins installer
                                        </Link>
                                    </li>
                                    
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/product/minecraft-mods-installer'} className="link link-hover">
                                                Minecraft Mods installer
                                        </Link>
                                    </li>
                                   
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/product/cloud-servers'} className=" link link-hover">
                                                Cloud Servers
                                        </Link>
                                    </li>
                                  
                                    
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/product/artifacts-changer'} className="link link-hover">
                                                Artifacts Changer
                                        </Link>
                                    </li>
                                    

                                </ul>
                            </div>

                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6 p-2 lg:p-0`}>Support
                                    & Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/contact'} className="link link-hover p-2 lg:p-0">
                                            Support Center
                                        </Link>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'https://help.bagou450.com'} rel={'noreferrer'} target={'_blank'}
                                            className="link link-hover p-2 lg:p-0">
                                            Knowledge base
                                        </a>
                                    </li>


                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'https://status.bagou450.com'} className="link link-hover p-2 lg:p-0">
                                            Server Status
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                            <div className={'hidden md:inline-grid'}>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>Our
                                    About
                                    Us</h3>
                                <ul role='list' className='space-y-4'>

                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'https://builtbybit.com/creators/bagou450.187451/'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            BuiltByBit
                                        </a>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <Link to={'/blog'} className='link link-hover'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>

                                        <a href={'https://www.youtube.com/@bagou450developement8'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            Youtube channel
                                        </a>
                                    </li>
                                    <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>
                                        <a href={'#'} target={'_blank'}
                                           rel={'noreferrer'} className='link link-hover'>
                                            Erusya (Soon)
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
        </footer>
    );
}