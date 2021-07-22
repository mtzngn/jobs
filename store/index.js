import { createStoreHook, compose, applyMiddleWare } from "redux";
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleWare(thunk)
    )
);

export default store;