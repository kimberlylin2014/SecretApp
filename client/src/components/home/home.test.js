import { shallow } from 'enzyme';
import Home from './home.jsx';
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator.jsx';

describe('Test if Password Generator Component has the correct props', () => {
  let wrapper = shallow(<Home currentUser={{user_id: 3}} currentToken={'abc'} addAccountForUser={() => {}}/>)
  test('test currentUser prop', () => {
    expect(wrapper.find(PasswordGenerator)).toHaveProp('currentUser');
    expect(wrapper.find(PasswordGenerator)).toHaveProp('addAccountForUser');
    expect(wrapper.find(PasswordGenerator)).toHaveProp('addAccountForUser');
  })
})