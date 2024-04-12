import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        ${tw`font-sans`};
        letter-spacing: 0.015em;
    }
    .markdown * {
        overflow-wrap: break-word;
        word-break: break-all;
    }
    footer {
            margin-top: auto;
    }
    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal`};
    }
    p {
        ${tw`leading-snug font-sans`};
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
        #lightbox > div:nth-child(-n+2) {
            ${tw`hidden lg:inline-flex`}
        }
        #lightbox > div:nth-child(3) {
            ${tw`flex-grow-0 mx-auto lg:flex-grow lg:mx-0`}
        }
        dl.grid-Faq {
            ${tw`grid gap-x-6 gap-y-6  md:gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-y-16 lg:grid-cols-3 lg:gap-x-16`}
        }
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
