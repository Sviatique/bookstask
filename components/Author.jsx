import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
class Author extends React.Component{
  componentDidMount(){
    const { dispatch } = this.props
  }
  render() {
    
    const {authorsInfo} = this.props
    const authorsData = authorsInfo.authors.authorsList
    //console.log(authorsData)
    const author = authorsData[`${this.props.params.name}`]
    //console.log(author)
    return (
      <div>
        <h1> {this.props.params.name} </h1>
        <div className="list"> <div className="item-identifiers"> Name: </div> {author.fullName}</div>
        <div className="list"> <div className="item-identifiers"> Biography: </div> {author.bio}</div>
        <div className="list"> <div className="item-identifiers"> Written books: </div>
        {author.booksList.map((book,i) => 
          <div key ={i} className="list-item"> 
            <Link to={{pathname: `/Books/${book}`}}> {book} </Link>
          </div>)}
        
        </div>
      </div>
    )
  }
}


function select(state) {
   return {
     authorsInfo: state.bookTaskApp
   }
}
export default connect(select)(Author)
