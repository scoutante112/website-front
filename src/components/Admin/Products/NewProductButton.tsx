import React, { useState } from "react";
import useSWR from "swr";
import { config } from "../../../config/config";
import { fetcher } from "../../../api/http";
import { mixed, number, object, string } from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import createProduct from "../../../api/admin/products/createProduct";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

export const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  },

  clipboard: {
    matchVisual: false
  }
};
export default function NewProductButton({page, perpage, search}: {page: number; perpage: number, search: string}) {
  const [loading, setLoading] = useState(false);
  const {mutate} = useSWR(`${config.privateapilink}/admin/users?page=${page}&perpage=${perpage}&search=${search}`, fetcher);

  const [isLicensed, setLicensed] = useState<boolean>(true);
  const [isNew, setNew] = useState<boolean>(true);
  const [isAutoInstaller, setAutoInstaller] = useState<boolean>(true);
  const [isTab, setTab] = useState<boolean>(false);
  const [isRecurrent, setRecurrent] = useState<boolean>(false);
  const [isHidded, setHide] = useState<boolean>(false);
  const [isExtension, setExtension] = useState<boolean>(false);

  const form = object({
    name: string().required(),
    tabroute: string().nullable(),
    version: number().required(),
    sxcname: string().nullable(),
    bbb_id: number().nullable(),
    tag: string().required(),
    description: string().required(),
    link: string().optional(),
    price: number().required(),
    logo: mixed().required(),
    zip: mixed().required(),
    extensionProduct: number().nullable()

  });
  const initialValues = {
    name: '',
    tabroute: '',
    version: 1.0,
    bbb_id: 0,
    tag: '',
    description: '<div class="flex flex-col w-full">\n' +
      '    <h4 class="ql-align-center">The Pterodactyl addon "Minecraft mods installer" allow you to download Minecraft mods from CurseForge and Modrinth website.</h4>\n' +
      '    <div class="divider mx-6">Functionalities</div>\n' +
      '    <div class="grid h-20 card rounded-box place-items-center grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2 mx-8">\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />\n' +
      '                    </svg>\n' +
      '                    Automatic download</h2>\n' +
      '                <p>Mods are automatically downloaded to the "mods" folder</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
      '                    </svg>\n' +
      '                    Versions management</h2>\n' +
      '                <p>You can retrieve the list of mod versions to install a specific version</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />\n' +
      '                    </svg>\n' +
      '                    Down protection</h2>\n' +
      '                <p>A built-in cache system is incorporated into the addon to ensure 100% uptime, providing seamless access to CurseForge and Modrinth servers in the event of any issues</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
      '                    </svg>\n' +
      '                    Real time fetching</h2>\n' +
      '                <p>This addon take all mods in real time from CurseForge and Modrinth</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />\n' +
      '                    </svg>\n' +
      '\n' +
      '                    Compatibility</h2>\n' +
      '                <p>This addons work on Pterodactyl 1.X and work also on all themes</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />\n' +
      '                    </svg>\n' +
      '                    No wings modification</h2>\n' +
      '                <p>You can install this addon without any modifications to your existing nodes. It streamlines the process and does not require manual editing for each addons installation</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />\n' +
      '                    </svg>\n' +
      '                    Our servers</h2>\n' +
      '                <p>This addon utilizes our API to optimize server load and cache storage, significantly reducing the need for code edits. Additionally, it enables you to conveniently check for new addon versions directly from the panel</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />\n' +
      '                    </svg>\n' +
      '                    Frequent update</h2>\n' +
      '                <p>We regularly provide updates to ensure the addon remains up-to-date and to add new functionalities. Rest assured, this addon will remain fully compatible with future versions of Pterodactyl, including Pterodactyl 2.X</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="card w-96 bg-neutral hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 h-full shadow-xl h-full w-full">\n' +
      '            <div class="card-body">\n' +
      '                <h2 class="card-title">\n' +
      '                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n' +
      '                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />\n' +
      '                    </svg>\n' +
      '\n' +
      '                    Support</h2>\n' +
      '                <p>We provide a support through Discord, Email, and SMS. We offer a quick responses within 6 hours.</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    <div class="divider mx-6">Overview</div>\n' +
      '    <p class="text-center text-xl my-2 font-semibold">Click on one of these previews to view it.</p>\n' +
      '    <div class="mx-16">\n' +
      '    <div class="flex w-full max-w-full" id="lightbox">\n' +
      '        <div class="flex-grow card rounded-box place-items-center">\n' +
      '            <div class="mockup-browser border bg-base-300 w-48">\n' +
      '                <div class="mockup-browser-toolbar">\n' +
      '                    <div class="input">https:/demo.bagou450.com</div>\n' +
      '                </div>\n' +
      '                <div class="flex justify-center px-4 py-2 bg-base-200 h-auto">\n' +
      '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/1.png" alt="0" class="max-w-full h-auto cursor-pointer" /> <!-- Utilisez la classe max-w-[taille] ici -->\n' +
      '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/2.png" alt="1" class="max-w-full h-auto cursor-pointer hidden" />\n' +
      '                    <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/computer/3.png" alt="2" class="max-w-full h-auto cursor-pointer hidden" />\n' +
      '                </div>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="my-auto mx-4">OR</div>\n' +
      '        <div class="flex-grow card rounded-box place-items-center">\n' +
      '            <div class="mockup-phone w-48 my-auto">\n' +
      '                <div class="camera"></div>\n' +
      '                <div class="display">\n' +
      '                    <div class="artboard artboard-demo phone-1">\n' +
      '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/1.png" alt="3" class="max-w-full h-full cursor-pointer" /> <!-- Utilisez la classe max-w-[taille] ici -->\n' +
      '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/2.png" alt="4" class="max-w-full h-full cursor-pointer hidden" />\n' +
      '                        <img src="https://cdn.bagou450.com/assets/img/addons/mcmods/mobile/3.png" alt="5" class="max-w-full h-full cursor-pointer hidden" />\n' +
      '                    </div>\n' +
      '                </div>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    </div>\n' +
      '\n' +
      '    <div class="divider mx-6">Frequently Asked Questions</div>\n' +
      '    <div class="mx-8">\n' +
      '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '        <input type="radio" name="my-accordion-2"/>\n' +
      '        <div class="collapse-title text-xl font-medium w-full">\n' +
      '            Is it possible to hide the mod addon from servers that are not running Minecraft?\n' +
      '        </div>\n' +
      '        <div class="collapse-content">\n' +
      '            <p>Sure! By default, our addon is hidden on servers that are not in the first nestId (Default Minecraft nestId of Pterodactyl). However, you have the flexibility to modify this behavior in the resources/scripts/routers/routes.ts file.</p>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '        <input type="radio" name="my-accordion-2" />\n' +
      '        <div class="collapse-title text-xl font-medium w-full">\n' +
      '            My servers are located in the USA. Will this cause any latency with your European servers?\n' +
      '        </div>\n' +
      '        <div class="collapse-content">\n' +
      '            <p>That\'s true, this can introduce some latency. In such cases, you can contact us to gain access to the US API.</p>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '            <input type="radio" name="my-accordion-2" />\n' +
      '            <div class="collapse-title text-xl font-medium w-full">\n' +
      '                What happend in case of a down of your servers?\n' +
      '            </div>\n' +
      '            <div class="collapse-content">\n' +
      '                <p>Our API has been open since 2021, and so far, we have experienced no downtime. In the event of a downtime on your main servers, we have two backup servers that can take over at any time.</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '            <input type="radio" name="my-accordion-2" />\n' +
      '            <div class="collapse-title text-xl font-medium w-full">\n' +
      '                Can I use the addon on multiple panels?\n' +
      '            </div>\n' +
      '            <div class="collapse-content">\n' +
      '                <p>A license can be used on 2 panels by default. If you need to use it on more panels, you can purchase additional licenses usage on your customer space.</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '            <input type="radio" name="my-accordion-2" />\n' +
      '            <div class="collapse-title text-xl font-medium w-full">\n' +
      '                What is the "BagouCenter"?\n' +
      '            </div>\n' +
      '            <div class="collapse-content">\n' +
      '                <p>The BagouCenter is a centralized space where you can manage all your Bagou450 addons. From this page, you can configure settings, check the API/CDN status, and update the addons directly from the panel. You can access the BagouCenter from the Admin page of your Pterodactyl panel.</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '            <input type="radio" name="my-accordion-2" />\n' +
      '            <div class="collapse-title text-xl font-medium w-full">\n' +
      '                What payment methods do you accept?\n' +
      '            </div>\n' +
      '            <div class="collapse-content">\n' +
      '                <p>We accept multiple payment methods, including bank cards, PayPal, and bank transfer.</p>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '\n' +
      '    <div class="collapse collapse-arrow bg-neutral focus:bg-base-200 my-2">\n' +
      '        <input type="radio" name="my-accordion-2" />\n' +
      '        <div class="collapse-title text-xl font-medium w-full">\n' +
      '            Can I see a demo of the addon before purchase it?\n' +
      '        </div>\n' +
      '        <div class="collapse-content">\n' +
      '            <p>Yes sure you can test our addons on the<a href="https://demo.bagou450.com" rel="noreferrer" target="_blank">demo panel</a> </p>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    </div>\n' +
      '</div>',
    price: 0,
    sxcname: '',
    link: '',
    extensionProduct: null,
    logo: new File([], ''),
    zip: new File([], '')
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: form,
    onSubmit: (values) => {
      setLoading(true)
      setLoading(false);
      createProduct(values.name, values.tag, values.version, values.price, values.sxcname, values.bbb_id, values.link, isLicensed, isNew, isAutoInstaller, isRecurrent, isTab, values.tabroute, values.description, isHidded, values.logo, values.zip, isExtension, values.extensionProduct).then((data) => {
        if (data.data['status'] === 'error') {
          toast.error(data.data['message'], {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false)

        } else {
          mutate();
          toast.success('Success! Product was edited.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
          // @ts-ignore
          window.newProductModal.close()
        }
        setLoading(false)
      }).catch((e) => {
        toast.error(`An unexcepted error happend. Please contact one of our support team. ${e}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false)
      })
    }
  });

  const handleContentChange = (editor: any, data: any, value: string) => {
    formik.setFieldValue('description', value);

  };

  return (
    <>    <dialog id={"newProductModal"} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">New product (Admin):</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid md:grid-cols-4 gap-x-4'>
            <div className={'col-span-2'}><label className="label">
              <span className="label-text">Name</span>
            </label>
              <input id="name"
                     defaultValue={''}
                     name="name"
                     type="name"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.name}</span>
              </label>
            </div>
            <div className={'col-span-2'}><label className="label">
              <span className="label-text">Tag</span>
            </label>
              <input id="tag"
                     defaultValue={''}
                     name="tag"
                     type="tag"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.tag}</span>
              </label>
            </div>
            <div><label className="label">
              <span className="label-text">Version</span>
            </label>
              <input id="version"
                     defaultValue={0}
                     name="version"
                     type="version"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.version}</span>
              </label>
            </div>

            <div><label className="label">
              <span className="label-text">Price</span>
            </label>
              <input id="price"
                     defaultValue={0}
                     name="price"
                     type="price"
                     onChange={formik.handleChange}
                     disabled={loading}
                     required
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.price}</span>
              </label>
            </div>

            <div><label className="label">
              <span className="label-text">SxcName</span>
            </label>
              <input id="sxcname"
                     defaultValue={''}
                     name="sxcname"
                     type="sxcname"
                     onChange={formik.handleChange}
                     disabled={loading}
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.sxcname}</span>
              </label>
            </div>
            <div><label className="label">
              <span className="label-text">BBB Id</span>
            </label>
              <input id="bbb_id"
                     defaultValue={''}
                     name="bbb_id"
                     type="bbb_id"
                     onChange={formik.handleChange}
                     disabled={loading}
                     className="input input-bordered w-full max-w-sm" />
              <label className="label">
                <span className='text-red-500'>{formik.errors.bbb_id}</span>
              </label>
            </div>
          </div>

          <div className={'my-2'}><label className="label">
            <span className="label-text" onClick={() => navigator.clipboard.writeText('[{"name":"ssx","link":""},{"name":"pm","link":""},{"name":"bbb","link":""}]')}>Link</span>
          </label>
            <input id="link"
                   defaultValue={''}
                   name="link"
                   type="link"
                   onChange={formik.handleChange}
                   disabled={loading}
                   className="input input-bordered w-full" />
            <label className="label">
              <span className='text-red-500'>{formik.errors.link}</span>
            </label>
          </div>

          <div className={'grid md:grid-cols-7 w-full'}>
            <div><label className="label">
              <span className="label-text">Licensed</span>
            </label>
              <input id="licensed"
                     defaultChecked={isLicensed}
                     name="licensed"
                     type="checkbox"
                     onChange={() => setLicensed(!isLicensed)}
                     disabled={loading}
                     className="toggle " />
            </div>
            <div><label className="label">
              <span className="label-text">New</span>
            </label>
              <input id="new"
                     defaultChecked={isNew}
                     name="new"
                     type="checkbox"
                     onChange={() => setNew(!isNew)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">AutoInstaller</span>
            </label>
              <input id="autoinstaller"
                     defaultChecked={isAutoInstaller}
                     name="autoinstaller"
                     type="checkbox"
                     onChange={() => setAutoInstaller(!isAutoInstaller)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">Recurrent</span>
            </label>
              <input id="recurrent"
                     defaultChecked={isRecurrent}
                     name="recurrent"
                     type="checkbox"
                     onChange={() => setRecurrent(!isRecurrent)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">Hidded</span>
            </label>
              <input id="hidded"
                     defaultChecked={isHidded}
                     name="hidded"
                     type="checkbox"
                     onChange={() => setHide(!isHidded)}
                     disabled={loading}
                     className="toggle" />
            </div>

            <div><label className="label">
              <span className="label-text">Tab</span>
            </label>
              <input id="tab"
                     defaultChecked={isTab}
                     name="tab"
                     type="checkbox"
                     onChange={() => setTab(!isTab)}
                     disabled={loading}
                     className="toggle" />
            </div>
            <div><label className="label">
              <span className="label-text">Extension</span>
            </label>
              <input id="tab"
                     defaultChecked={isExtension}
                     name="tab"
                     type="checkbox"
                     onChange={() => setExtension(!isExtension)}
                     disabled={loading}
                     className="toggle" />
            </div>
            {isTab ?
              <div className={'col-span-7'}><label className="label">
                <span className="label-text">Tab Route</span>
              </label>
                <input id="tabroute"
                       defaultValue={''}
                       name="tabroute"
                       type="tabroute"
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.tabroute}</span>
                </label>
              </div>
              : <></>}
            {isExtension ?
              <div className={'col-span-7'}><label className="label">
                <span className="label-text">Extension product Id</span>
              </label>
                <input id="extensionProduct"
                       defaultValue={''}
                       name="extensionProduct"
                       type="extensionProduct"
                       onChange={formik.handleChange}
                       disabled={loading}
                       className="input input-bordered w-full" />
                <label className="label">
                  <span className='text-red-500'>{formik.errors.extensionProduct}</span>
                </label>
              </div>
              : <></>}
          </div>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="form-control w-full flex flex-col justify-center items-center">
              <label className="label">
                <span className="label-text">Zip</span>
              </label>
              <input
                type="file"
                id="zip"
                name="zip"
                onChange={(e) => {
                  if(e.target.files) {
                    const file = e.target.files[0];
                    if (file) {
                      formik.setFieldValue('zip', file);
                    }
                  }
                }}
                className="file-input file-input-bordered file-input-primary w-full max-w-xs mx-auto"
              />
            </div>
            <div className="form-control w-full flex flex-col justify-center items-center">
              <label className="label">
                <span className="label-text">Icon <strong>WEBP</strong></span>
              </label>
              <input
                type="file"
                id="logo"
                onChange={(e) => {
                  if(e.target.files) {
                    const file = e.target.files[0];
                    if (file) {
                      formik.setFieldValue('logo', file);
                    }
                  }
                }}
                name="logo"
                className="file-input file-input-bordered file-input-secondary w-full max-w-xs mx-auto"
              />
            </div>
          </div>

          <CodeMirror
            value={formik.values.description}
            options={{
              mode: 'htmlmixed',
              theme: 'dracula',
              lineNumbers: true,
            }}
            className={'mt-2'}
            onBeforeChange={handleContentChange}
          />
          <div className='flex justify-end col-span-2 mx-4 mt-4'>
            <button type='submit' disabled={loading || !formik.errors} className='btn btn-primary btn-outline outline-0 self-end mx-4'>Submit</button>
            <button type="button" className="btn" onClick={() => { // @ts-ignore
              window.newProductModal.close()}}>Close</button>
          </div>
        </form>
      </div>
    </dialog>
      <button className={'btn btn-primary btn-outline outline-0'} onClick={() => { // @ts-ignore
        window.newProductModal.showModal()}}>New product</button>
    </>
  )
}