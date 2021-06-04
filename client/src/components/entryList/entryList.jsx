import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import styles from './entryList.styles.css';

const EntryList = (props) => {
  let uniqueId = uuidv4();
  return (
    <div className={styles.EntryList}>
      <Button color="secondary" id={`T${uniqueId}`} style={{marginBottom: '10px'}}>
        Reveal
      </Button>
      <UncontrolledCollapse toggler={`#T${uniqueId}`}>
        <Card>
          <CardBody style={{padding: '5px 0 10px 0'}}>
            <p>Account Email: {props.account.email}</p>
            <p>Password: {props.account.account_password}</p>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  )
};

export default EntryList;