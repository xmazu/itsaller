import React from 'react';
import moment from 'moment';
import Map from 'google-map-react';

import './artist-event.scss';
import { EventEntity } from '../../types';

export interface ArtistEventProps {
  event: EventEntity;
}

export interface ArtistEventState {
  opened: boolean;
}

export default class ArtistEvent extends React.Component<
  ArtistEventProps,
  ArtistEventState
> {
  constructor(props: ArtistEventProps) {
    super(props);

    this.state = {
      opened: false
    };
  }

  toggleMap = () => this.setState(prevState => ({ opened: !prevState.opened }));

  render() {
    const { event } = this.props;
    return (
      <div className="artistEvent" onClick={this.toggleMap}>
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
        {this.state.opened && (
          <div className="artistEvent__venueMap">
            <Map
              defaultZoom={11}
              defaultCenter={{
                lng: Number(event.long),
                lat: Number(event.lat)
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
