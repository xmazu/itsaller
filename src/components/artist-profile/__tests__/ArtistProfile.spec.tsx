import React from 'react';
import { shallow } from 'enzyme';

import ArtistProfile from '../ArtistProfile';

describe('<ArtistProfile />', () => {
  it('renders correctly', () => {
    const mockedEvent = {
      date: new Date(2018, 1, 1, 9, 30, 0, 0),
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland'
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
