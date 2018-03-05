/* eslint-disable no-undef */
import React from 'react';
import 'jest-enzyme';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<Home First />', () => {
  it('should find H3 tag', () => {
    const HomeComponent = () => <Home />;
    const mapStateToProps = state => ({ state });
    const ConnectedHome = connect(mapStateToProps)(HomeComponent);
    const component = shallowWithStore(<ConnectedHome />, createMockStore({}));
    expect(component.find('h3').length).toBe(1);
  });
});
