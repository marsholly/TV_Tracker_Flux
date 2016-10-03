import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import Storage from '../Storage';

let _tv = Storage.read('favoriteTV') || [];

class FavoriteTVStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ONE_TV':
          let { tv } = action.payload;
          _tv.push(tv);
          this.emit('CHANGE');
          break;
        case 'REMOVE_TV':
          let { _id } = action.payload;
          let newFavoriteTVs = _tv.filter(t => {
            return t._id !== _id;
          });
          _tv = newFavoriteTVs;
          this.emit('CHANGE');
          break;
      }
    });

    this.on('CHANGE', () => {
      Storage.write('favoriteTV', _tv);
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getFavoriteTV() {
    return _tv;
  }
}

export default new FavoriteTVStore();
