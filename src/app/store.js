import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducers yang akan dipakau
import gridReducer from '../features/Grid/reducer'

// gabungkan atau combine reducers
let rootReducers = combineReducers({
    grid: gridReducer // berikan nama state untuk reducer gridReducer misalnya grid
})
// end gabungkan atau combine reducers

// buat composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store rootReducers ke createStore
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

// export
export default store

