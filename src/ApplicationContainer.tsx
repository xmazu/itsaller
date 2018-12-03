import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import createHistory from 'history/createBrowserHistory';

import './application-container.scss';
import SearchInput from './components/search-input';
import { Artist } from './types';
import { fetchArtist, fetchArtistEvents } from './utils/api';
import Loader from './components/loader';

const history = createHistory();

const INPUT_DEBOUNCE_TIME = 100;

export interface ApplicationContainerProps {}

export interface ApplicationContainerState {
  pending: boolean;
  query: string;
  artist: Artist | null;
  pinned: boolean;
  error: Error | null;
}

export default class ApplicationContainer extends React.Component<
  ApplicationContainerProps,
  ApplicationContainerState
> {
  constructor(props: ApplicationContainerProps) {
    super(props);

    this.state = {
      pending: false,
      artist: null,
      query: '',
      pinned: false,
      error: null
    };

    this.loadData = debounce(this.loadData.bind(this), INPUT_DEBOUNCE_TIME, {
      leading: true
    });
  }

  componentDidMount() {
    this.setState({ query: history.location.pathname.slice(1) }, () =>
      this.loadData()
    );
  }

  onChangeQuery = (query: string) => {
    this.setState(
      {
        query
      },
      () => {
        history.replace('/' + decodeURIComponent(query));
        this.loadData();
      }
    );
  };

  async loadData() {
    this.setState({
      pending: true
    });

    try {
      const artist = await fetchArtist(this.state.query);
      const events = await fetchArtistEvents(artist.name);
      console.log(events);
      console.log(artist);
      this.setState({
        error: null,
        artist
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ pending: false });
    }
  }

  renderResults() {
    const { pending, error, query } = this.state;

    if (!query) {
      return null;
    }

    if (pending) {
      return <Loader />;
    }

    if (error) {
      return <div>Artist not found</div>;
    }
    return 'works';
  }

  render() {
    return (
      <div className="applicationContainer">
        <div className="applicationContainer__content">
          <div
            className={classnames('searchForm', {
              'searchForm--pinned': this.state.query
            })}
          >
            <SearchInput
              onChange={this.onChangeQuery}
              value={this.state.query}
            />
            {this.renderResults()}
          </div>
        </div>
      </div>
    );
  }
}
