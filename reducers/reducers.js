import { combineReducers } from 'redux'
import * as types from '../actions/ActionTypes'
import booksData from '../data/books.js'
import authorsData from '../data/authors.js'

// const booksData = require('../data/books')
// const authorsData = require('../data/authors')
const initialState = {
	chosenAuthorId: 'Author1'
}

export default function authors(state = initialState, action){

	switch (action.type){
		case types.SET_INITIAL_DATA:
		
				return Object.assign({}, state,{
					booksList: action.data.books,
					authorsList: action.data.authors
				})
		case types.OPEN_AUTHOR_INFO:
				console.log(state)
				return Object.assign({}, state,{
					chosenAuthorId: action.id
				})
		default:
			return state
	}
}
const bookTaskApp = combineReducers({
	authors
})

export default bookTaskApp