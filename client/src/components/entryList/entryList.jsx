import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import styles from './entryList.styles.css';

const EntryList = (props) => (
  <div className={styles.EntryList}>
    <Button color="secondary" id={props.account.account_name} style={{marginBottom: '10px'}}>
      Reveal
    </Button>
    <UncontrolledCollapse toggler={`#${props.account.account_name}`}>
      <Card>
        <CardBody style={{padding: '5px 0 10px 0'}}>
          <p>Account Email: {props.account.email}</p>
          <p>Password: {props.account.account_password}</p>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default EntryList;