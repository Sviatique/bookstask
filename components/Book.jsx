import React from 'react'
import { Link } from 'react-router'

import {connect} from 'react-redux'
class Book extends React.Component{
	constructor(props){
	    super(props);
		  this.book;

    }
  
  render() {
    const {dispatch, booksInfo} = this.props;
    var booksData = booksInfo.books.booksList;
    console.log(booksData)
    for(var i =0; i<booksData.length; i++){
      if(booksData[i].id === this.props.params.name){
        this.book = booksData[i]
      }
    }
    return (
      <div>
          <h1>  {this.props.params.name} </h1>
          <div className="list">
              <ItemIdentifier value="Name" /> {this.book.name} 
          </div>
          <div className="list">
              <ItemIdentifier value="Authors" />
              {this.book.authors.map((author, i) => 
                  <div className="list-item" key={i}> 
                      <Link to = {{pathname: `/Authors/${author}`}}>{author}</Link>
                  </div>)}
          </div>
          <div className="list"> 
              <ItemIdentifier value="Genre" />
              <Link to = {{pathname: `/Genres/${this.book.genre}`}}>{this.book.genre}</Link>
          </div>
      </div>
    )
  }
}
class ItemIdentifier extends React.Component{
  render(){
    return(
        <div className="item-identifiers"> {this.props.value}: </div>
      )
  }
}
function select(state) {
   return {
     booksInfo: state.bookTaskApp
   }
}
export default connect(select)(Book)