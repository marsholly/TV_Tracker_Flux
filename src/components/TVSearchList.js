import React, { Component } from 'react';
import TVStore from '../stores/TVStore';
import TVActions from '../actions/TVActions';
import {browserHistory} from 'react-router';

export default class TVSearchList extends Component {
  constructor() {
    super();
    this.state = {
      tvs: TVStore.getAllTVs()
    }

    this._onChange = this._onChange.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  componentWillMount() {
    TVStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TVStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ tvs: TVStore.getAllTVs() })
  }

  addFavorite(name) {
    TVActions.singleSearchByName(name);
    browserHistory.push('/favorite');
  }

  render() {
    let { tvs } = this.state;
    let rows;
    if (tvs) {
      rows = tvs.map((tv,index) => {
        let { show } = tv;
        let {image, name, genres, schedule, rating} = show;
        let genre = genres.map(ge =>{
          return ge + ', ';
        })
        let { days, time } = schedule;
        let day = days.map(d =>{
          return d + ', ';
        })
          return (
            <tr key = {index}>
              <td><img src={image.original} width='150' height='200'/></td>
              <td><h4>{name}</h4></td>
              <td>{genre}</td>
              <td>{ time } / { day }</td>
              <td>{rating.average}</td>
              <td>
                <button className="btn btn-danger btn-xs" onClick={this.addFavorite.bind(null,name)}>
                  <i className="glyphicon glyphicon-heart"></i>
                </button>
              </td>
            </tr>
          )
      })
    } else {
      rows = <tr></tr>
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Genres</th>
            <th>Schedule</th>
            <th>Rating</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
};
