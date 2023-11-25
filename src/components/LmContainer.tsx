import React from 'react';
import { Helmet } from 'react-helmet';
import { useDark } from '../App';

export default function LmContainer() {
    const {dark} = useDark();
    document.title = 'Bagou450 - Legal Mention';

    return (
        <section className="mx-4 md:mx-16">
            <Helmet>
                <meta name='description' content={'Discover Bagou450\'s Legal Mention page for important legal information about our company. Stay informed about our legal status and obligations.'} />

                <meta name="twitter:description" content={'Discover Bagou450\'s Legal Mention page for important legal information about our company. Stay informed about our legal status and obligations.'} />

                <meta property="og:description" content={'Discover Bagou450\'s Legal Mention page for important legal information about our company. Stay informed about our legal status and obligations.'} />
            </Helmet>
            <h1 className={`text-4xl text-center ${dark ? 'text-white' : 'text-black'}`}>Legal Mention</h1>
            <div className="my-8">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-black'}`}>Company Information:</h2>
                <p className={`my-4 font-bold ${dark ? 'text-white' : 'text-black'}`}>
          Company Name: BAGOU450<br/>
          Legal form: Limited Liability Company (without further specification)<br/>
          SIREN: 951 613 033<br/>
          SIRET of the registered office: 951 613 033 00012<br/>
          Registered Office: 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>Director</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>DIRECTOR'S NAME: ROMAIN GUILLEMOT<br/>
          Date of Birth: November 2005</p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>Contact</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>Postal Address: BAGOU450, 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France<br/>
          Email Address: contact@bagou450.com
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>Website Hosting</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>The website is hosted by  Infomaniak Network SA. Les Acacias, Genève, Suisse
                </p>
            </div>
            <div className="my-8">

                <h2 className={`font-bold text-xl my-4 ${dark ? 'text-white' : 'text-black'}`}>Intellectual Property</h2>
                <p className={`my-4 ${dark ? 'text-white' : 'text-black'}`}>All intellectual property rights related to the content and design of this website are the property of BAGOU450.
                </p>
            </div>
        </section>
    );
}