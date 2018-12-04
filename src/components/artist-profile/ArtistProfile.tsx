import React, { SFC } from 'react';

import { ArtistEntity, EventEntity } from '../../types';
import './artist-profile.scss';
import EventsList from './EventsList';

export interface ArtistProfileProps {
  artist: ArtistEntity;
  events: EventEntity[];
}

const ArtistProfile: SFC<ArtistProfileProps> = ({ artist, events }) => (
  <div className="artistProfile">
    <div className="artistProfile__details">
      <div className="artistProfile__image">
        <img src={artist.image} alt={artist.name} />
      </div>
      <div className="artistProfile__name">
        <h1>{artist.name}</h1>
      </div>
      <div className="artistProfile__link">
        <a href={artist.facebook} target="_blank">
          Facebook profile
        </a>
      </div>
    </div>
    <div className="artistProfile_events">
      <EventsList events={events} />
    </div>
  </div>
);

export default ArtistProfile;
