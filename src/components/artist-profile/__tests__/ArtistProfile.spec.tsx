import React from 'react';
import { shallow } from 'enzyme';

import ArtistProfile from '../ArtistProfile';

describe('<ArtistProfile />', () => {
  it('renders correctly', () => {
    const mockedEvent = {
      date: "2018-12-30T19:00:48",
      city: 'Krakow',
      country: 'Poland',
      venue: 'Tauron Arena',
      lat: 0,
      long: 0
    };
    const artist = {
      facebook: 'http://fb.me',
      image: 'https://i.ytimg.com/vi/5530I_pYjbo/maxresdefault.jpg',
      name: 'Catzilla'
    };
    const component = shallow(
      <ArtistProfile events={[mockedEvent]} artist={artist} />
    );
    expect(component).toMatchSnapshot();
  });
});
