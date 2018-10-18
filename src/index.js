import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import './bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/rootReducer';
import { Route, IndexRoute } from 'react-router';


// const initialState = { 
//     selectedProject:'5c'
//   };

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
//ReactDOM.render( <App />, document.getElementById('root'));

//ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}>
        </Router>
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
