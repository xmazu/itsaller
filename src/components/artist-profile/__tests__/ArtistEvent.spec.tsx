import React from 'react';
import { shallow } from 'enzyme';

import ArtistEvent from '../ArtistEvent';

describe('<ArtistEvent />', () => {
  it('renders correctly', () => {
    const mockedEvent = {
      date: "2018-12-30T19:00:48",
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland',
      long: 0,
      lat: 0
    };
    const component = shallow(<ArtistEvent event={mockedEvent} />);
    expect(component).toMatchSnapshot();
  });
});
