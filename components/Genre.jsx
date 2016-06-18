import React from 'react'
import { Link } from 'react-router'

import {connect} from 'react-redux'

class Genre extends React.Component{
	
  render() {

		this.genreBooksList = [];
		const { dispatch, booksInfo} = this.props;
		var booksData = booksInfo.books.booksList;
		
	    for(var i =0; i<booksData.length; i++){
			if(booksData[i].genre === this.props.params.name){
				this.genreBooksList.push(booksData[i]);
			}
	    }
    return (
      	<div>
      	<h1> {this.props.params.name} </h1>
		<div className="list"><div className="item-identifiers"> Books in this genre: </div> 
			{this.genreBooksList.map((book,i) => 
				<div key = {i}>
					<Link to = {{pathname: `/Books/${book.name}`}}> {book.name}</Link>
				</div>
				)}
		</div>
        </div>
    )
  }
}
function select(state) {
   return {
     booksInfo: state.bookTaskApp
   }
}
export default connect(select)(Genre)