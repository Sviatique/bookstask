import React from 'react'
import { Link } from 'react-router'
import authorsData from '../data/AuthorsData.js'
class Author extends React.Component{
  constructor(props){
    super(props);
    this.author;  
    for(var i =0; i<authorsData.length; i++){
      if(authorsData[i].id === this.props.params.name){
        this.author = authorsData[i]
      }
    }  
  }
 
  render() {
    
    return (
      <div>
        <h1> {this.props.params.name} </h1>
        <div className="list"> <ItemIdentifier value="Name" /> {this.author.fullName}</div>
        <div className="list"> <ItemIdentifier value="Biography" /> {this.author.bio}</div>
        <div className="list"> <ItemIdentifier value="Written books" />{this.author.booksList.map((book,i) => 
          <div key ={i}> 
            <Link to={{pathname: `/Books/${book}`}}> {book} </Link>
          </div>)}
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
export default Author;