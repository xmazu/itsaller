import React from 'react';
import { shallow } from 'enzyme';

import ArtistEvent from '../ArtistEvent';

describe('<ArtistEvent />', () => {
  it('renders correctly', () => {
    const mockedEvent = {
      date: new Date(2018, 1, 1, 9, 30, 0, 0),
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland'
    };
    const component = shallow(<ArtistEvent event={mockedEvent} />);
    expect(component).toMatchSnapshot();
  });
});
