import {createStore, applyMiddleware} from 'redux'

// import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from './reducers/index.ts'
import thunk from 'redux-thunk'
const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware))

export default store;