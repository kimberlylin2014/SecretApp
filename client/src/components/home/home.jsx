import React from 'react';
import {Button } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button color="danger">Danger!</Button>
    )
  }
}

export default Home;