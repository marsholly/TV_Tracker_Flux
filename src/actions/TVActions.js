import API from '../API';

const TVActions = {
  searchByName(name) {
    API.searchByName(name)
  },
  singleSearchByName(name) {
    API.singleSearchByName(name)
  }
}

export default TVActions;
