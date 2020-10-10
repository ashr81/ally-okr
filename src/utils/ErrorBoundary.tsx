import React, { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // set the types for error  and info
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this page. We are investigating the cause of issue.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;