import React from 'react'
import { Link } from 'react-router'
import booksData from '../data/BooksData.js'
class Books extends React.Component{
	constructor(){
	    super();
	  
  	}
	render() {
		return (
			<div>
			<h1> 
				Books
			</h1>
			<div>
		
                  {booksData.map((book, i) => <BookInfo key = {i} data = {book} />)}
              	 	
				
			</div>
			</div>
			);
	}
}
class BookInfo extends React.Component{
	render() {

      return (
         
          	<div>
				<ul>
					<li >
						<Link to={{pathname: `/Books/${this.props.data.name}`}}>{this.props.data.name}</Link>
					</li>
				</ul>
				<div className="list">
				<div className="item-identifiers"> Authors: </div>
	            {this.props.data.authors.map((author,i) => 
	            	<div key={i} className="list-item">
	            		<Link to={{ pathname: `/Authors/${author}`}} > {author}</Link>
	            	</div>
	            )}          
	            </div>
        	</div>
      );
   }
}
export default Books;