import React, { Component } from 'react';
import TVSearchList from './TVSearchList';
import TVActions from '../actions/TVActions';

export default class ViewTVList extends Component {
  constructor() {
    super();
    this.searchTV = this.searchTV.bind(this);
  }

  searchTV(e) {
    e.preventDefault();
    let name = this.refs.names.value;
    TVActions.searchByName(name);
  }

  render() {
    return (
      <div className="row">
        <h2 className="text-center">Search TV</h2>
        <div className="text-center">
          <form className="navbar-form" role="search" onSubmit={this.searchTV}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="TV Name" ref="names" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
          <div className="row">
            <TVSearchList />
          </div>
        </div>
      </div>
    )
  }
};
