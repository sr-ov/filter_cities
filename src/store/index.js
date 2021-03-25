import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { addDataReducer } from './reducers/addDataReducer'
import { countryClickReducer } from './reducers/countryClickReducer'
import { cityClickReducer } from './reducers/cityClickReducer'

const rootReducer = combineReducers({
	addDataReducer,
	countryClickReducer,
	cityClickReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
