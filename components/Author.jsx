import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
class Author extends React.Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    const { dispatch } = this.props;
  }
  render() {
    const {authorsInfo} = this.props
    this.author;  
    var authorsData = authorsInfo.authors.authorsList;
    
    
    for(var i =0; i<authorsData.length; i++){
      if(authorsData[i].id === this.props.params.name){
        this.author = authorsData[i]
      }
    }  

    return (
      <div>
        <h1> {this.props.params.name} </h1>
        <div className="list"> <ItemIdentifier value="Name" /> {this.author.fullName}</div>
        <div className="list"> <ItemIdentifier value="Biography" /> {this.author.bio}</div>
        <div className="list"> <ItemIdentifier value="Written books" />
        {this.author.booksList.map((book,i) => 
          <div key ={i} className="list-item"> 
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

function select(state) {
   return {
     authorsInfo: state.bookTaskApp
   }
}
export default connect(select)(Author)
