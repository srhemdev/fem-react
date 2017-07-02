const redux = require('redux')
const reactRedux = require('react-redux')

//Make all your actions constants so that if you need to change your constant later,
//you just need to change the text.
const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

//Multiple reducers
const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState;
}

const store = redux.createStore(rootReducer)

//state of redux store
const mapStateToProps = (state) => ({searchTerm: state.searchTerm})

const mapDispatchToProps = (dispatch) => {
  return {
      setSearchTerm (searchTerm) {
        dispatch({type: SET_SEARCH_TERM, value: searchTerm})
      }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store}
