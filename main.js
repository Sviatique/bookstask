import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Links, browserHistory, IndexRoute } from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import booksData from './data/books.js'
import authorsData from './data/authors.js'

import App from './App.jsx';
import Books from './components/Books.jsx';
import Book from './components/Book.jsx';
import Authors from './components/Authors.jsx';
import Author from './components/Author.jsx';
import Genre from './components/Genre.jsx';

import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import bookTaskApp from './reducers/reducers'
const store = createStore(combineReducers({
		bookTaskApp, 
		routing: routerReducer
	})
)

store.dispatch({ 
	type: 'SET_INITIAL_DATA',
	data: {
		books: booksData,
		authors: authorsData
	}
})
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((
	<Provider store = {store}>
	<div>
	    <Router history={history}>
			<Route path = "/" component = {App}>		
				<Route path = "/Books"  component={Books} parameter="book"/> 
				<Route path = "/Authors" component = {Authors} />
				<Route path = "/Authors/:name" component = {Author} />
				<Route path = "/Books/:name" component = {Book} />
				<Route path = "/Genres/:name" component = {Genre} />
			</Route>
		</Router>
	</div>
	</Provider>),
document.getElementById('app'));

