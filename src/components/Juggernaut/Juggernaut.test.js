import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Juggernaut from './Juggernaut';

describe('Juggernaut', () => {
  let props;
  let shallowJuggernaut;
  let renderedJuggernaut;
  let mountedJuggernaut;

  const shallowTestComponent = () => {
    if (!shallowJuggernaut) {
      shallowJuggernaut = shallow(<Juggernaut {...props} />);
    }
    return shallowJuggernaut;
  };

  const renderTestComponent = () => {
    if (!renderedJuggernaut) {
      renderedJuggernaut = render(<Juggernaut {...props} />);
    }
    return renderedJuggernaut;
  };

  const mountTestComponent = () => {
    if (!mountedJuggernaut) {
      mountedJuggernaut = mount(<Juggernaut {...props} />);
    }
    return mountedJuggernaut;
  };  

  beforeEach(() => {
    props = {};
    shallowJuggernaut = undefined;
    renderedJuggernaut = undefined;
    mountedJuggernaut = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
