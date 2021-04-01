import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './login.styles.css';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const loginData = this.state;
    const { setCurrentUserSession } = this.props;
    axios.post('/secret/login', loginData)
      .then((data) => {
        setCurrentUserSession(data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className={styles.Form}>
        <h3>Login</h3>
        <Form >
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" value={this.state.email} onChange={this.handleOnChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.handleOnChange}/>
          </FormGroup>
          <Button onClick={this.handleOnSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;