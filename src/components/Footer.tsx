import React from 'react';

export default function Footer() {
    <footer className="footer p-10 bg-base-200 text-base-content">
    <div>
        <img
            src="https://cdn.bagou450.com/website/assets/logo/bagou-white-nobg.png"
            className={`h-16 hidden md:block`}
            alt='Logo'
        />
        <p>Bagou450.<br/>Provide Sysadmin service since 2016 and Pterodactyl addons since 2020</p>
    </div> 
    <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Pterodactyl installation</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Whmcs installation + setup</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Virtualizor installation + setup</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Custom Pterodactyl addons</a>
    </div> 
    <div>
        <span className="footer-title">Shop</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/collections">Pterodactyl addons</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/minecraft-premium-versions-changer">Minecraft versions changer</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/pterodactyl-addon-artifacts-changer">Artifacts changer</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/products/pterodactyl-addon-cloud-servers">Cloud servers</a>
    </div> 
    <div>
        <span className="footer-title">About</span> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/contact-information">Contact</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/terms-of-service">Terms of Service</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/privacy-policy">Privacy Policy</a> 
        <a className="link link-hover" href="https://shop.bagou450.com/policies/refund-policy">Refund Policy</a>
    </div>
    </footer>
}