import React, { SFC } from 'react';

import './artist-event.scss';
import { EventEntity } from '../../types';

export interface ArtistEventProps {
  event: EventEntity;
}

const ArtistEvent: SFC<ArtistEventProps> = ({ event }) => (
  <div className="artistEvent">{event.venue}</div>
);

export default ArtistEvent;
