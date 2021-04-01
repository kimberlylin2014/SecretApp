import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './passwordGenerator.styles.css';

class PasswordGenerator extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      email: '',
      account_password: '',
      account_name: 'Instagram'
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSelect(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { currentUser, addAccountForUser } = this.props;
    addAccountForUser(this.state);

  }
  render() {
    const { account_name } = this.state;
    return (
      <div className={styles.PasswordGenerator}>
            <h5>Add an Account</h5>
           <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.handleOnChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="account_password" id="examplePassword" placeholder="password placeholder" onChange={this.handleOnChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="account_name" id="exampleSelect" value={account_name} onChange={this.handleSelect}>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Myspace</option>
                <option>Google</option>
                <option>Github</option>
              </Input>
            </FormGroup>
            <Button onClick={this.handleOnSubmit}>Submit</Button>
          </Form>
      </div>
    );
  }
}


export default PasswordGenerator;



