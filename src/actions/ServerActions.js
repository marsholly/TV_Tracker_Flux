import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveTVs(tvs) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_TVS',
      payload: { tvs }
    })
  },
  receiveOneTV(tv) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_TV',
      payload: { tv }
    })
  }

}

export default ServerActions;
