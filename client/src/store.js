import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

const initialState = {}
const middleware=[thunk]
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

let currentState = store.getState();

store.subscribe(()=> {
    let previousState=currentState;
    currentState=store.getState();
})

export default store;