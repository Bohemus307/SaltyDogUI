import React from 'react';
import propTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error('err: ', error, 'error info: ', errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <img src="/images/error.svg" alt="error" title="error" />
          <h1>
            :( Something went wrong.
            <br />
            Please Reload the Page
          </h1>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.element.isRequired,
};

export default ErrorBoundary;
