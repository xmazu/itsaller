import React from 'react';
import classnames from 'classnames';
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
    const { opened } = this.state;
    return (
      <div
        className={classnames('artistEvent', {
          'artistEvent--visible-map': opened
        })}
        onClick={this.toggleMap}
      >
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
        {opened && (
          <div className="artistEvent__venueMap">
            <Map
              bootstrapURLKeys={{
                key: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
              }}
              defaultZoom={11}
              defaultCenter={{
                lng: event.long,
                lat: event.lat
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
