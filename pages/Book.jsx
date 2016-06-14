import React from 'react'
import { Link } from 'react-router'
import booksData from '../data/BooksData.js'
class Book extends React.Component{
	constructor(props){
	    super(props);
	    
		
		this.book;
    for(var i =0; i<booksData.length; i++){
      if(booksData[i].id === this.props.params.name){
        this.book = booksData[i]
      }
    }

  	}
  render() {
    return (
      <div>
      <h1>  {this.props.params.name} </h1>
      <div> Name: {this.book.name}</div>
      Authors: {this.book.authors.map((author, i) => 
      	<div key={i}> 
      		<Link to = {{pathname: `/Authors/${author}`}}>{author}</Link>
      	</div>)}
      <div> Genre: <Link to = {{pathname: `/Genres/${this.book.genre}`}}>{this.book.genre}</Link></div>
        </div>
    )
  }
}

export default Book;