import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configureStore = () => {

    const middlewares = [thunk]

    const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
	const store = createStore(
		rootReducer,
		composedEnhancer(applyMiddleware(...middlewares))
	);

	return store;
};
