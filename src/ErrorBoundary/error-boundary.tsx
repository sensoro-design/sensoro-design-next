import React from 'react';
import type { ErrorInfo } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './interface';

import Result from '../Result';

// eslint-disable-next-line @typescript-eslint/ban-types
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false, errorMessage: '', errorInfo: null };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });

    if (typeof this.props.onError === 'function') {
      this.props.onError(error, errorInfo);
    }
  }

  renderError = () => {
    const { fallback: Fallback } = this.props;
    const { errorMessage, errorInfo } = this.state;

    if (Fallback) {
      return <Fallback errorMessage={errorMessage} errorInfo={errorInfo as ErrorInfo} />;
    }

    return (
      <Result
        status="error"
        title="Something went wrong."
        extra={this.state.errorMessage}
        {...this.props.resultProps}
      />
    );
  };

  render() {
    if (this.state.hasError) {
      return this.renderError();
    }

    return this.props.children;
  }
}
