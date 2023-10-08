import React from "react";

export default function LmContainer() {
  document.title = "Bagou450 - Refund Policy";

  return (
    <section className="mx-4 md:mx-16">
      <h1 className={'text-4xl text-center'}>Legal Mention</h1>
      <div className="my-8">
        <h2 className="text-2xl font-bold">Company Information:</h2>
        <p className="my-4">
          Company Name: BAGOU450<br/>
          Legal form: Limited Liability Company (without further specification)<br/>
          SIREN: 951 613 033<br/>
          SIRET of the registered office: 951 613 033 00012<br/>
          Registered Office: 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France
        </p>
      </div>
      <div className="my-8">

      <h2 className={'font-bold text-xl my-4'}>Director</h2>
        <p className="my-4">DIRECTOR'S NAME: ROMAIN GUILLEMOT<br/>
          Date of Birth: November 2005</p>
      </div>
      <div className="my-8">

      <h2 className={'font-bold text-xl my-4'}>Contact</h2>
        <p className="my-4">Postal Address: BAGOU450, 2 RUE DES ORCHIDEES, 35450 DOURDAIN, France<br/>
          Email Address: contact@bagou450.com
        </p>
      </div>
      <div className="my-8">

      <h2 className={'font-bold text-xl my-4'}>Website Hosting</h2>
        <p className="my-4">The website is hosted by  Infomaniak Network SA. Les Acacias, Genève, Suisse
        </p>
      </div>
      <div className="my-8">

      <h2 className={'font-bold text-xl my-4'}>Intellectual Property</h2>
        <p className="my-4">All intellectual property rights related to the content and design of this website are the property of BAGOU450.
    </p>
      </div>
    </section>
  )
}