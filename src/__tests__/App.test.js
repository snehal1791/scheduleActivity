
import React from 'react';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('initializes `activities` to a blank array', () => {
    expect(
      wrapper.state().activities
    ).toEqual([]);
  });
});
