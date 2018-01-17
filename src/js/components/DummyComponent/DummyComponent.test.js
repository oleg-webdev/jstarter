/* eslint-disable no-undef */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DummyComponent from './DummyComponent';

configure({
  adapter: new Adapter(),
});

describe('<DummyComponent Second />', () => {
  it('should find SOME', () => {
    const wrapper = shallow(<DummyComponent />);
    expect(wrapper.find('.testing-purposes')).toHaveLength(1);
  });
});
