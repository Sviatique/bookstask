import React from 'react'
import { Link } from 'react-router'
import booksData from '../data/BooksData.js'
class Genre extends React.Component{
	constructor(props){
	    super(props);
	    
		this.genreBooksList = [];

	    for(var i =0; i<booksData.length; i++){
			if(booksData[i].genre === this.props.params.name){
				this.genreBooksList.push(booksData[i]);
			}
	    }
  	}
  render() {
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

export default Genre;