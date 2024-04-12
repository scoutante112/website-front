import { h } from 'preact';
import { PureComponent } from 'preact/compat';
import ErrorPage from '../components/ErrorPage';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: object) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {

        if (this.state.hasError) {
            return <ErrorPage/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;