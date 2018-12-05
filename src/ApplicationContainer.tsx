import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import createHistory from 'history/createBrowserHistory';

import './application-container.scss';
import SearchInput from './components/search-input';
import { ArtistEntity, EventEntity } from './types';
import { fetchArtist, fetchArtistEvents } from './utils/api';
import ArtistProfile from './components/artist-profile';
import ConditionalOverlay from './components/conditional-overlay';
import Loader from './components/loader';

const history = createHistory();

const INPUT_DEBOUNCE_TIME = 500;

export interface ApplicationContainerProps {}

export interface ApplicationContainerState {
  query: string;
  artist: ArtistEntity | null;
  events: EventEntity[];
  pending: boolean;
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
      events: [],
      query: '',
      error: null
    };

    this.onKeyUp = debounce(this.onKeyUp.bind(this), INPUT_DEBOUNCE_TIME);
  }

  componentDidMount() {
    const query = history.location.pathname.slice(1);

    if (query) {
      this.setState({ query: decodeURIComponent(query) }, () => this.loadData());
    }
  }

  onChangeQuery = (query: string) => {
    this.setState(
      {
        query,
        ...(query
          ? ({} as ApplicationContainerState)
          : { pending: false, artist: null, error: null, events: [] })
      },
      () => this.changeQueryCallback(query)
    );
  };

  changeQueryCallback = (query: string) =>
    history.replace('/' + encodeURIComponent(query));

  onKeyUp() {
    if (this.state.query) {
      this.loadData();
    }
  }

  loadData = async () => {
    this.setState({
      pending: true,
      artist: null,
      error: null,
      events: []
    });

    try {
      const artist = await fetchArtist(this.state.query);
      const events = await fetchArtistEvents(artist.name);
      this.setState({
        artist,
        events
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ pending: false });
    }
  };

  renderResults() {
    const { pending, error, artist, events } = this.state;

    if (pending) {
      return null;
    }

    if (error) {
      return <div>Artist not found</div>;
    }

    return artist ? <ArtistProfile artist={artist} events={events} /> : null;
  }

  render() {
    const { query, pending } = this.state;
    return (
      <ConditionalOverlay
        condition={pending}
        overlay={<Loader text="Searching for the best result..." />}
      >
        <div className="applicationContainer">
          <div className="applicationContainer__content">
            <div
              className={classnames('searchForm', {
                'searchForm--pinned': Boolean(query)
              })}
            >
              <SearchInput
                onChange={this.onChangeQuery}
                onKeyUp={this.onKeyUp}
                value={query}
              />
              {query && this.renderResults()}
            </div>
          </div>
        </div>
      </ConditionalOverlay>
    );
  }
}
