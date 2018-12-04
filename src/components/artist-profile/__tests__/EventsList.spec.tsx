import React from 'react';
import { shallow } from 'enzyme';

import EventsList from '../EventsList';

describe('<EventsList />', () => {
  it('renders correctly the list', () => {
    const mockedEvent = {
      id: 'my.id',
      date: '2018-12-30T19:00:48',
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland',
      lat: 0,
      long: 0
    };
    const component = shallow(<EventsList events={[mockedEvent]} />);
    expect(component).toMatchSnapshot();
  });

  it('renders message for empty list', () => {
    const component = shallow(<EventsList events={[]} />);
    expect(component.text()).toEqual('No events found.');
  });
});
