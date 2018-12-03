import React from 'react';

import DataFetcher from './components/data-fetcher';
import SearchInput from './components/search-input';

export default class ApplicationContainer extends React.Component {
  render() {
    return (
      <DataFetcher path="/something">
        <SearchInput />
      </DataFetcher>
    );
  }
}
