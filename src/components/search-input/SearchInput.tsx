import React from 'react';

import Icon from '../icon';
import './search-input.scss';

export interface SearchInputProps {
  value: string;
  onChange(query: string): void;
  onKeyUp(): void;
}

export default class SearchInput extends React.Component<SearchInputProps> {
  onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.onChange(e.target.value);

  render() {
    return (
      <div className="searchInput">
        <Icon icon="search" className="searchInput__icon" />
        <input
          className="searchInput__editor"
          placeholder="search..."
          onChange={this.onChange}
          onKeyUp={this.props.onKeyUp}
          value={this.props.value}
        />
      </div>
    );
  }
}
