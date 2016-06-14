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
        <div> {this.author.fullName}</div>
        <div> {this.author.bio}</div>
        <div> {this.author.booksList.map((book,i) => 
          <div key ={i}> 
            <Link to={{pathname: `/Books/${book}`}}> {book} </Link>
          </div>)}
        </div>
      </div>
    )
  }
}

export default Author;