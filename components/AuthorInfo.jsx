import React from 'react'
import { Link } from 'react-router'
 class AuthorInfo extends React.Component{
	render(){

		return(
			<div >
				<Link to={{ pathname: `/Authors/${this.props.authorId}`}}>{this.props.authorId} page </Link>
            	<div className='list'> 
            		<div className='item-identifiers'> Written books: </div>
            	</div>
	            	{this.props.data.booksList.map((book,i) => 
	            	<div key = {i} className='list-item'>
	            		<Link to={{ pathname: `/Books/${book}`}} > {book} </Link>
	            	</div>)}
            </div>
				 
			);
	}
}

export default AuthorInfo