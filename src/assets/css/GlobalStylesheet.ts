import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default createGlobalStyle`
    html {
        ${tw`font-sans`};
        letter-spacing: 0.015em;
    }

    footer {
            margin-top: auto;
    }
    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal`};
    }
    p {
        ${tw`leading-snug font-sans text-black dark:text-[#cbd5e1]`};
        color: black;
    }

    form {
        ${tw`m-0`};
    }
    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield !important;
    }
    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px hsl(211, 10%, 53%), inset 0 0 0 4px hsl(209deg 18% 30%);
    }
    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }
    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
    .ql {
        .dark-content {
${tw`text-slate-200`}
      blockquote {
        ${tw`bg-bg450-inputdark`}
      }

      pre.ql-syntax {
        ${tw`bg-bg450-inputdark`}
      }
      .ql-align-center {
         ${tw`justify-center flex`}
      }
      img {
        ${tw`my-2`}     
      }
      a {
        ${tw`mx-1 text-blue-500 hover:underline`}
      }
            .ql-font-monospace {
                    ${tw`font-mono`}
            }
        }
        .light-content {
            ${tw`text-black`}
      blockquote {
        ${tw`bg-neutral`}
      }

      pre.ql-syntax {
        ${tw`bg-neutral`}
      }
      .ql-align-center {
         ${tw`justify-center flex`}
      }
      img {
        ${tw`my-2`}     
      }
      a {
        ${tw`mx-1 text-blue-500 hover:underline`}
      }
            .ql-font-monospace {
                    ${tw`font-mono`}
            }
        }
            
      
    }
   
    
`;
