import React from 'react';

export enum ResourceState {
  Void,
  Pending,
  Fulfilled,
  Rejected
}

export interface DataFetcherProps {
  path: string;
}

export interface DataFetcherState<T> {
  data: T;
  status: ResourceState;
  error?: Error;
}

export default class DataFetcher<T> extends React.Component<
  DataFetcherProps,
  DataFetcherState<T>
> {
  render() {
    return this.props.children;
  }
}
