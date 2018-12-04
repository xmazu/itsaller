import React, { SFC } from 'react';

import './artist-profile.scss';
import { EventEntity } from '../../types';
import ArtistEvent from './ArtistEvent';

export interface EventsListProps {
  events: EventEntity[];
}

const eventItemRenderer = (event: EventEntity, index: number) => (
  <ArtistEvent key={index} event={event} />
);

const EventsList: SFC<EventsListProps> = ({ events }) => (
  <div className="eventsList">
    {events.length > 0 ? events.map(eventItemRenderer) : <span>No events</span>}
  </div>
);

export default EventsList;
