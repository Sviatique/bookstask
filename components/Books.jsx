import React from 'react'
import { Link } from 'react-router'
import { loadBooksInfo } from '../actions/Actions'
import { connect } from 'react-redux'

class Books extends React.Component{

	constructor(){
	    super();
	  
  	}
	render() {
	    const { dispatch, booksInfo } = this.props
		//var booksData = dispatch(loadBooksInfo());
	
	    const booksData = booksInfo.authors.booksList; // 1:name of prop, 2: name of reducer, 3: name of field in state
		
	    //console.log(booksData);
		
		return (
			<div>
				<h1> 
					Books
				</h1>
				<div>
				{
						Object.keys(booksData).map((key) =>
				       <BookInfo key = {key} data = {booksData[key]} />)
					}
	                  
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

function select(state) {
   return {
     booksInfo: state.bookTaskApp
   }
}
export default connect(select)(Books)
