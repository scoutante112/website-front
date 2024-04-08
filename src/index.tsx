import { render } from 'preact';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './utils/i18n';
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
    rootElement.innerHTML = '';

    render(
        <>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </>,
        rootElement,
    );

    reportWebVitals();
} else {
    console.error('Couldn\'t find root element');
}