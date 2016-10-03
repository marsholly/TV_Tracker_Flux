import React, { Component } from 'react';
import FavoriteTVStore from '../stores/FavoriteTVStore';
import TVActions from '../actions/TVActions';

export default class FavoriteTVList extends Component {
  constructor() {
    super();
    this.state = {
      tv: FavoriteTVStore.getFavoriteTV()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    FavoriteTVStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FavoriteTVStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ tv: FavoriteTVStore.getFavoriteTV() })
  }


  render() {
    let {tv} = this.state;
    console.log('tv:', tv);
    return (
      <div className="container">
        <h1 className="text-center">FavoriteTVList</h1>

      </div>
    )
  }
};
