import React from 'react';
import { shallow } from 'enzyme';

import ArtistEvent from '../ArtistEvent';

describe('<ArtistEvent />', () => {
  it('renders correctly and it is clickable', () => {
    const mockedEvent = {
      id: 'my.id',
      date: '2018-12-30T19:00:48',
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland',
      lat: 0,
      long: 0
    };

    const fn = jest.fn();

    const component = shallow(
      <ArtistEvent event={mockedEvent} opened={false} onToggle={fn} />
    );
    component.find('.artistEvent').simulate('click');
    expect(component).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
  });
});
