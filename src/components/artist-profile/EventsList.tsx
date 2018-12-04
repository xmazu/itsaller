import React, { SFC } from 'react';

import { EventEntity } from '../../types';
import ArtistEvent from './ArtistEvent';

export interface EventsListProps {
  events: EventEntity[];
}

const eventItemRenderer = (event: EventEntity) => <ArtistEvent event={event} />;

const EventsList: SFC<EventsListProps> = ({ events }) =>
  events.length > 0 ? (
    <>{events.map(eventItemRenderer)}</>
  ) : (
    <span>No events</span>
  );

export default EventsList;
