/* eslint-disable no-undef */
import React from 'react';
import 'jest-enzyme';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DummyComponent from './DummyComponent';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<DummyComponent First />', () => {
  it('should find LENGTH', () => {
    const wrapper = shallow(<DummyComponent />);
    wrapper.setState({ out: true });
    expect(wrapper.find('.testing-purposes').length).toBe(1);
  });
});

describe('<DummyComponent Second />', () => {
  it('should find NODE', () => {
    const wrapper = shallow(<DummyComponent />);
    wrapper.setState({ out: true });
    wrapper.setState({ name: '...' });
    expect(wrapper.contains(<p className="testing-purposes">...</p>)).toEqual(true);
  });
});
