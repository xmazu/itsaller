import React from 'react';

import './error-boundary.scss';

export interface ErrorBoundaryProps {}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    // TODO: sentry reporting
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <div className="errorBoundary__image">
            <img
              src="https://media.giphy.com/media/MMHanEe8I7TS8/giphy.gif"
              alt=""
            />
          </div>
          <h1 className="errorBoundary__msg">Something went wrong hooman</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
