import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './passwordGenerator.styles.css';

class PasswordGenerator extends React.Component {
  constructor(props) {
    super (props)
  }
  render() {
    return (
      <div className={styles.PasswordGenerator}>
            <h5>Add an Account</h5>
           <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Myspace</option>
                <option>Google</option>
                <option>Github</option>
              </Input>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
      </div>
    );
  }
}


export default PasswordGenerator;



