import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Sheiko from './Sheiko';

describe('Sheiko', () => {
  let props;
  let shallowSheiko;
  let renderedSheiko;
  let mountedSheiko;

  const shallowTestComponent = () => {
    if (!shallowSheiko) {
      shallowSheiko = shallow(<Sheiko {...props} />);
    }
    return shallowSheiko;
  };

  const renderTestComponent = () => {
    if (!renderedSheiko) {
      renderedSheiko = render(<Sheiko {...props} />);
    }
    return renderedSheiko;
  };

  const mountTestComponent = () => {
    if (!mountedSheiko) {
      mountedSheiko = mount(<Sheiko {...props} />);
    }
    return mountedSheiko;
  };  

  beforeEach(() => {
    props = {};
    shallowSheiko = undefined;
    renderedSheiko = undefined;
    mountedSheiko = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
