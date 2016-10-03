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
    this.unFavorite = this.unFavorite.bind(this);
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

  unFavorite(id) {
    TVActions.removeTV(id);
  }

  render() {
    let {tv} = this.state;
    let rows;
    if (tv) {
      rows = tv.map(t => {
        let {_id, image, name, genres, schedule, rating} = t;
        let genre = genres.map(ge =>{
          return ge + ', ';
        })
        let { days, time } = schedule;
        let day = days.map(d =>{
          return d + ', ';
        })
          return (
            <tr key = {_id}>
              <td><img src={image.original} width='150' height='200'/></td>
              <td><h4>{name}</h4></td>
              <td>{genre}</td>
              <td>{ time } / { day }</td>
              <td>{rating.average}</td>
              <td>
                <button className="btn btn-warning btn-xs" onClick={this.unFavorite.bind(null,_id)}>
                  <i className="glyphicon glyphicon-trash"></i>
                </button>
              </td>
            </tr>
          )
      })
    } else {
      rows = <tr></tr>
    }
    return (
      <div className="container">
        <h1 className="text-center">FavoriteTVList</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Genres</th>
              <th>Schedule</th>
              <th>Rating</th>
              <th>Unfavorite</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
};
