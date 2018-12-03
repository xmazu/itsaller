import React from 'react';

import Icon from '../icon';
import './search-input.scss';

export interface SearchInputProps {
  value: string;
  onChange(query: string): void;
}

export default class SearchInput extends React.Component<SearchInputProps> {
  onChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    this.props.onChange(e.currentTarget.value);

  render() {
    return (
      <div className="searchInput">
        <Icon icon="search" />
        <input
          placeholder="search..."
          onChange={this.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
