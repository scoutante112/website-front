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
                            src={'https://cdn.bagou450.com/website/assets/logo/bagou-nobg.webp'}
                            className="h-16 w-16"
                            alt="Logo Bagou450" />
                        <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-6`}>
            Bagou450<br />Provide Sysadmin service since 2016 <br />Provide Pterodactyl addons since 2020<br/> <img src={'https://cdn.bagou450.com/assets/img/illustration/payment.webp'} className={'w-[50%]'}/>
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
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <Link to={'/tos'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Terms of Service</li>
                                    </Link>
                                    <Link to={'/pp'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}> Privacy Policy</li>
                                    </Link>
                                    <Link to={'/rp'} className=" link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}> Refund Policy</li>
                                    </Link>
                                    <Link to={'/lm'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}> Legal Mention</li>
                                    </Link>

                                </ul>
                            </div>
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>Our Pterodactyl addons</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <Link to={'/product/296'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Minecraft Version changer</li>
                                    </Link>

                                    <Link to={'/product/326'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Minecraft Plugins installer</li>
                                    </Link>
                                    <Link to={'/product/257'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Minecraft Mods installer</li>
                                    </Link>
                                    <Link to={'/product/585'} className=" link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Cloud Servers</li>
                                    </Link>
                                    <Link to={'/product/271'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Artifacts Changer</li>
                                    </Link>

                                </ul>
                            </div>

                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>Support & Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <Link to={'/contact'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Support Center</li>
                                    </Link>

                                    <a href={'https://help.bagou450.com'} rel={'noreferrer'} target={'_blank'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Helpdesk</li>
                                    </a>
                                    <Link to={'https://status.bagou450.com'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Server Status</li>
                                    </Link>

                                </ul>
                            </div>
                            <div>
                                <h3 className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-sm font-semibold leading-6`}>About Us</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <Link to={'/news'} className="link link-hover">
                                        <li className={`${dark ? 'text-gray-300 hover:text-gray-600' : 'text-gray-600 hover:text-gray-900'} text-sm leading-6`}>Blog</li>
                                    </Link>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" border-t border-gray-900/10 sm:mt-20 lg:mt-24">
                </div>
            </div>
        </footer>
    );
}