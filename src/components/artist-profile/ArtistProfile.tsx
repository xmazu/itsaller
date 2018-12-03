import React from 'react';

import { Artist } from '../../types';
import './artist-profile.scss';
import Icon from '../icon';

export interface ArtistProfileProps {
  artist: Artist;
}

export default class ArtistProfile extends React.Component<ArtistProfileProps> {
  render() {
    const { artist } = this.props;
    return (
      <div className="artistProfile">
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
    );
  }
}
