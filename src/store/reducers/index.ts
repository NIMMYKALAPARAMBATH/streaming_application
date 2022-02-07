import { combineReducers } from 'redux'
import movieReducer from './movieReducer.ts'

export default combineReducers({
  moviesList: movieReducer
})