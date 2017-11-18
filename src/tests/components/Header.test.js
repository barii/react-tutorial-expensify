import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json';

// reast-test-renderer

// test('should test Header', () => {
//   const renderer = new ReactShallowRenderer();

//   renderer.render(<Header  />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot

// });



test('should test Header', () => {
  const wrapper = shallow(<Header />);

  //expect(wrapper.find('h1').text()).toBe('Expensify');

  //expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();


});

