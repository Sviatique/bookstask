import React from 'react'
import { Link } from 'react-router'
import authorsData from '../data/AuthorsData.js'

class Authors extends React.Component{
	
	constructor(){
		super();
		
		this.alreadyOpened = 0;
		this.authorsInfo = [];		
		
	}
	handleClick(clickedId, authorData){

		this.authorsInfo[this.alreadyOpened] = "";
		this.authorsInfo[clickedId] = <AuthorInfo data = {authorData} />

		this.alreadyOpened = clickedId;
		this.forceUpdate()
	}
	componentDidMount() {
		
		for(var i=0; i<authorsData.length; i++){
			this.authorsInfo.push("");
			
		}
		
	}
  render() {
    	
    return (
		<div>
			<h1> Authors</h1>
			
					{authorsData.map((author, i) => 
						
						<AuthorName click={this.handleClick.bind(this,i, author)} key = {i} data = {author} openedAuthorInfo={this.authorsInfo[i]}/> 
						
						)}  
					
				
			
		</div>
    )
  }
}

class AuthorName extends React.Component{
	constructor(props){
		super(props);
		this.showDropDownMenu = this.showDropDownMenu.bind(this);
	}
	showDropDownMenu(){
		
		this.props.click();
		
	}
	render() {

      return (
      	<div>
	        <div className="clickable">
	        	<div className="clickable-item">
	            	<div className="list" onClick={this.showDropDownMenu}>{this.props.data.fullName}</div>
	            </div>
	        </div>
	            <div id= {this.props.data.id}> {this.props.openedAuthorInfo}</div>
        </div>
      );
   }
}

class AuthorInfo extends React.Component{
	render(){
		return(
				
			<div>
				<Link to={{ pathname: `/Authors/${this.props.data.id}`}}>{this.props.data.id} page </Link>
            	<div className="list"> 
            		<div className="item-identifiers"> Written books: </div>

	            	{this.props.data.booksList.map((book,i) => 
	            	<div key = {i} className="list-item"> 
	            	<Link to={{ pathname: `/Books/${book}`}} > {book} </Link>
	            	</div>)}
            	</div>
            </div>
				 
			);
	}
}
export default Authors;