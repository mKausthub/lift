import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Riptoe from './Riptoe';

describe('Riptoe', () => {
  let props;
  let shallowRiptoe;
  let renderedRiptoe;
  let mountedRiptoe;

  const shallowTestComponent = () => {
    if (!shallowRiptoe) {
      shallowRiptoe = shallow(<Riptoe {...props} />);
    }
    return shallowRiptoe;
  };

  const renderTestComponent = () => {
    if (!renderedRiptoe) {
      renderedRiptoe = render(<Riptoe {...props} />);
    }
    return renderedRiptoe;
  };

  const mountTestComponent = () => {
    if (!mountedRiptoe) {
      mountedRiptoe = mount(<Riptoe {...props} />);
    }
    return mountedRiptoe;
  };  

  beforeEach(() => {
    props = {};
    shallowRiptoe = undefined;
    renderedRiptoe = undefined;
    mountedRiptoe = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
