import React, { SFC } from 'react';
import format from 'date-fns/format';

import './artist-event.scss';
import { EventEntity } from '../../types';

export interface ArtistEventProps {
  event: EventEntity;
}

const ArtistEvent: SFC<ArtistEventProps> = ({ event }) => (
  <div className="artistEvent">
    <div className="artistEvent__date">
      <div className="artistEvent__month">{format(event.date, 'MMM')}</div>
      <div className="artistEvent__day">{format(event.date, 'DD')}</div>
    </div>

    <div className="artistEvent__venue">
      <div className="artistEvent__venueName">{event.venue}</div>
      <div className="artistEvent__city">
        {event.city}, {event.country}
      </div>
    </div>
  </div>
);

export default ArtistEvent;
