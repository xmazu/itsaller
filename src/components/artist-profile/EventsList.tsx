import React, { SFC } from 'react';

import './artist-profile.scss';
import { EventEntity } from '../../types';
import ArtistEvent from './ArtistEvent';

export interface EventsListProps {
  events: EventEntity[];
}

export interface EventsListState {
  openedId: string | null;
}

export default class EventsList extends React.Component<
  EventsListProps,
  EventsListState
> {
  constructor(props: EventsListProps) {
    super(props);

    this.state = {
      openedId: null
    };
  }

  onToggleEvent = (event: EventEntity) => () =>
    this.setState(prevState => ({
      openedId: prevState.openedId === event.id ? null : event.id
    }));

  renderEventItem = (event: EventEntity) => (
    <ArtistEvent
      key={event.id}
      event={event}
      opened={this.state.openedId === event.id}
      onToggle={this.onToggleEvent(event)}
    />
  );

  render() {
    const { events } = this.props;

    return (
      <div className="eventsList">
        {events.length > 0 ? (
          events.map(this.renderEventItem)
        ) : (
          <span>No events</span>
        )}
      </div>
    );
  }
}
