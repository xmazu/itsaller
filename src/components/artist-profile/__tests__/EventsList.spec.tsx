import React from 'react';
import { shallow } from 'enzyme';

import EventsList from '../EventsList';

describe('<EventsList />', () => {
  it('renders correctly the list', () => {
    const mockedEvent = {
      date: new Date(2018, 1, 1, 9, 30, 0, 0),
      venue: 'Tauron Arena',
      city: 'Krakow',
      country: 'Poland'
    };
    const component = shallow(<EventsList events={[mockedEvent]} />);
    expect(component).toMatchSnapshot();
  });

  it('renders message for empty list', () => {
    const component = shallow(<EventsList events={[]} />);
    expect(component.text()).toEqual('No events');
  });
});
