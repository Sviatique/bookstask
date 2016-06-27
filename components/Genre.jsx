import React from 'react'
import { Link } from 'react-router'

import {connect} from 'react-redux'

class Genre extends React.Component{
	
  render() {

		let genreBooksList = [];
		const { dispatch, booksInfo} = this.props;
		const booksData = booksInfo.authors.booksList
		Object.keys(booksData).map((key) => {
				       	if(booksData[key].genre === this.props.params.name){
				    		genreBooksList.push(booksData[key])
				    	}
				    })
    return (
      	<div>
      	<h1> {this.props.params.name} </h1>
		<div className="list"><div className="item-identifiers"> Books in this genre: </div> 
			{genreBooksList.map((book,i) => 
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