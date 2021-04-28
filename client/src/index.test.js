import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './components/app.jsx';

test('renders the app component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toContainMatchingElement('.App');
})