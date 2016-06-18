import * as types from "./ActionTypes"

export function openAuthorInfo(id){
	return {
		type: types.OPEN_AUTHOR_INFO,
		id
	};
}

export function loadBooksInfo(){
	return {
		type: types.LOAD_BOOKS_INFO
		
	};
}

export function loadAuthorsInfo(){
	return {
		type: types.LOAD_AUTHORS_INFO
	};
}