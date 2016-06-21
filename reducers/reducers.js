import { combineReducers } from 'redux'
import * as types from "../actions/ActionTypes"
import booksData from '../data/BooksData.js'
import authorsData from '../data/AuthorsData.js'

const initialState = {
	prevChosenAuthorId: -1,
	chosenAuthorId: -1,
	booksList: booksData,
	authorsList: authorsData
}
export default function books(state = initialState, action){
	
	switch (action.type){
		default:
			return state;
	}
}
export default function authors(state = initialState, action){

	switch (action.type){
		
		case types.OPEN_AUTHOR_INFO:
				
				return Object.assign({}, state,{
					prevChosenAuthorId: state.chosenAuthorId,
					chosenAuthorId: action.id

				})
		default:
			return state;
	}
}
const bookTaskApp = combineReducers({
	books,
	authors
});

export default bookTaskApp;