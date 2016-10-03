import ServerActions from './actions/ServerActions';
import {get} from 'axios';
import uuid from 'uuid';

const API = {
  searchByName(name) {
    get(`http://api.tvmaze.com/search/shows?q=${name}`)
      .then(res => {
        let tvs = res.data;
        ServerActions.receiveTVs(tvs);
      })
  },
  singleSearchByName(name) {
    get(`http://api.tvmaze.com/singlesearch/shows?q=${name}`)
      .then(res => {
        let tv = res.data;
        tv._id = uuid();
        ServerActions.receiveOneTV(tv);
      })
  },
}

export default API;
