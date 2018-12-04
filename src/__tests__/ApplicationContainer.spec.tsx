import React from 'react';
import { mount } from 'enzyme';

import ApplicationContainer from '../ApplicationContainer';

describe('<ApplicationContainer />', () => {
  it('should call loadDate()', () => {
    const name = 'maroon5';
    const component = mount(<ApplicationContainer />);
    component.find('input').simulate('change', { target: { value: name } });
    expect(component.state('query')).toBe(name);
  });
});
