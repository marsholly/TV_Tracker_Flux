import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _tvs = null;

class TVStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_TVS':
          _tvs = action.payload.tvs;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllTVs() {
    return _tvs;
  }

}

export default new TVStore();
