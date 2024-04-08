import { PureComponent } from 'preact/compat';

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

    static getDerivedStateFromError(_: any) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: object) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <p className={'text-white mx-auto my-auto'}>A unknown error occurred</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;