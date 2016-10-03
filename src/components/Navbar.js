import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ol className="breadcrumb">
            <li><Link to = "/" >Home</Link></li>
            <li><Link to = '/view' >ViewTV</Link></li>
            <li><Link to = '/favorite' >FavoriteTV</Link></li>
          </ol>
        </div>
        {this.props.children}
      </div>
    )
  }
};
