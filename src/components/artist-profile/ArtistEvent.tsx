import React, { SFC } from 'react';
import moment from 'moment';

import './artist-event.scss';
import { EventEntity } from '../../types';

export interface ArtistEventProps {
  event: EventEntity;
}

const ArtistEvent: SFC<ArtistEventProps> = ({ event }) => (
  <div className="artistEvent">
    <div className="artistEvent__date">
      <div className="artistEvent__month">
        {moment(event.date)
          .utc()
          .format('MMM')}
      </div>
      <div className="artistEvent__day">
        {moment(event.date)
          .utc()
          .format('DD')}
      </div>
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
