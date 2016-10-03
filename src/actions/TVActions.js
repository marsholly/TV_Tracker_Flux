import API from '../API';
import AppDispatcher from '../AppDispatcher';

const TVActions = {
  searchByName(name) {
    API.searchByName(name)
  },
  singleSearchByName(name) {
    API.singleSearchByName(name)
  },
  removeTV(_id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_TV',
      payload: { _id }
    })
  }
}

export default TVActions;
