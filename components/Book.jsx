import React from 'react'
import { Link } from 'react-router'

import {connect} from 'react-redux'
class Book extends React.Component{

	render() {
	const {dispatch, booksInfo} = this.props
	const booksData = booksInfo.authors.booksList
  const book = booksData[`${this.props.params.name}`]
	console.log(booksData)
    return (
      <div>
          <h1>  {this.props.params.name} </h1>
          <div className="list">
              <div className="item-identifiers"> Name: </div> 
              {book.name} 
          </div>

          <div className="list">
              <div className="item-identifiers"> Authors: </div>
              {book.authors.map((author, i) => 
                  <div className="list-item" key={i}> 
                      <Link to = {{pathname: `/Authors/${author}`}}>{author}</Link>
                  </div>)}
          </div>
          <div className="list"> 
              <div className="item-identifiers"> Genre: </div>
              <Link to = {{pathname: `/Genres/${book.genre}`}}>{book.genre}</Link>
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
export default connect(select)(Book)
