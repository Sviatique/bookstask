import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Links, browserHistory, IndexRoute } from 'react-router';

import App from './pages/App.jsx';
import Books from './pages/Books.jsx';
import Book from './pages/Book.jsx';
import Authors from './pages/Authors.jsx';
import Author from './pages/Author.jsx';
import Genre from './pages/Genre.jsx';
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path = "/" component = {App}>		
			
			<Route path = "/Books" component = {Books} />
			<Route path = "/Authors" component = {Authors} />
			<Route path = "/Authors/:name" component = {Author} />
			<Route path = "/Books/:name" component = {Book} />
			<Route path = "/Genres/:name" component = {Genre} />
		</Route>
		
	</Router>
), document.getElementById('app'));