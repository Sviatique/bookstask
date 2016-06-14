import React from 'react'
import { Link } from 'react-router'
import authorsData from '../data/AuthorsData.js'

class Authors extends React.Component{
	
	constructor(){
		super();
		
		this.state ={
			authorDataMarkup: "",
		}
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
			<table >
				<tbody>
					{authorsData.map((author, i) => 
						
						<AuthorName click={this.handleClick.bind(this,i, author)} key = {i} data = {author} openedAuthorInfo={this.authorsInfo[i]}/> 
						
						)}  
					
				</tbody>

			</table>
			
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
         <tr>          
            <td onClick={this.showDropDownMenu}>{this.props.data.fullName}</td>
            <div id= {this.props.data.id}> {this.props.openedAuthorInfo}</div>
         </tr>
      );
   }
}

class AuthorInfo extends React.Component{
	render(){
		return(
				
			<td>
				<Link to={{ pathname: `/Authors/${this.props.data.id}`}}>{this.props.data.id} page </Link>
            {this.props.data.booksList.map((book,i) => 
            	<div key = {i}> 
            	<Link to={{ pathname: `/Books/${book}`}} > {book} </Link>
            	</div>)}
            </td>
				 
			);
	}
}
export default Authors;