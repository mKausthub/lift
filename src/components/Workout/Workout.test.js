import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Workout from './Workout';

describe('Workout', () => {
  let props;
  let shallowWorkout;
  let renderedWorkout;
  let mountedWorkout;

  const shallowTestComponent = () => {
    if (!shallowWorkout) {
      shallowWorkout = shallow(<Workout {...props} />);
    }
    return shallowWorkout;
  };

  const renderTestComponent = () => {
    if (!renderedWorkout) {
      renderedWorkout = render(<Workout {...props} />);
    }
    return renderedWorkout;
  };

  const mountTestComponent = () => {
    if (!mountedWorkout) {
      mountedWorkout = mount(<Workout {...props} />);
    }
    return mountedWorkout;
  };  

  beforeEach(() => {
    props = {};
    shallowWorkout = undefined;
    renderedWorkout = undefined;
    mountedWorkout = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
