import { combineReducers } from 'redux'
import movieReducer from './movieReducer'

export default combineReducers({
  moviesList: movieReducer
})