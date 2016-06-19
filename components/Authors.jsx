import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { openAuthorInfo } from '../actions/Actions'

class Authors extends React.Component{
	
	constructor(){
		super();
		this.authorsDataLength = 0;
		this.authorsInfo = [];		
		
	}
	handleClick(clickedId, authorData){
		
		this.authorsInfo[this.alreadyOpened] = "";
		//var authorData = "authorData";
		
		this.dispatch(openAuthorInfo(clickedId));

		
		this.forceUpdate()
	}
	componentDidMount() {
		this.dispatch = this.props.dispatch;
		for(var i=0; i<this.authorsDataLength; i++){
			this.authorsInfo.push("");
		}
		
	}
  render() {
    	const {authorsInfo} = this.props;
    	var authorsData = authorsInfo.authors.authorsList;
    	var chosenAuthorId = authorsInfo.authors.chosenAuthorId;
    	var prevChosenAuthorId = authorsInfo.authors.prevChosenAuthorId;
    	this.authorsDataLength = authorsData.length;

    	if(chosenAuthorId >= 0 && chosenAuthorId < authorsData.length){
    		this.authorsInfo[prevChosenAuthorId] = "";
    		this.authorsInfo[chosenAuthorId] = <AuthorInfo data = {authorsData[chosenAuthorId]} />
    	}
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
function select(state) {
   return {
     authorsInfo: state.bookTaskApp
   }
}
export default connect(select)(Authors)