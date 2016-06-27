import * as types from "./ActionTypes"

export function openAuthorInfo(id){
	return {
		type: types.OPEN_AUTHOR_INFO,
		id
	}
}
