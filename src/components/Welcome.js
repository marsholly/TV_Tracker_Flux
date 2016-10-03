import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component {
  render() {
    return(
      <div className="row">
        <Jumbotron>
          <h1 className="text-center">Welcome to TV Tracker App</h1>
        </Jumbotron>
      </div>
    )
  }
};
