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
			<table>
               <tbody>
                  {booksData.map((book, i) => <BookInfo key = {i} data = {book} />)}
               </tbody>
            </table>
				
			</div>
			</div>
			);
	}
}
class BookInfo extends React.Component{
	render() {

      return (
         <tr>
          
            <td><Link to={{pathname: `/Books/${this.props.data.name}`}}>{this.props.data.name}</Link></td>
            <td class="table-list">{this.props.data.authors.map((author,i) => 
            	<div key = {i}> 
            	<Link to={{ pathname: `/Authors/${author}`}} > {author} </Link>
            	</div>)}</td>
          
         </tr>
      );
   }
}
export default Books;