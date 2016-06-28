import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { openAuthorInfo } from '../actions/Actions'
import  AuthorInfo from './AuthorInfo.jsx'

class Authors extends React.Component{
	

	handleClick(clickedId){
		this.dispatch(openAuthorInfo(clickedId))
	}

	componentDidMount() {
		this.dispatch = this.props.dispatch;
	}
  render() {
  	const authorsData = this.props.authorsInfo.authors.authorsList
  	console.log('authors data(authors.jsx)')
  	console.log(authorsData)
  	const chosenAuthorId = this.props.authorsInfo.authors.chosenAuthorId 
    return (
		<div>
			<h1> Authors</h1>
			<div className='list'>
					<div >

					{Object.keys(authorsData).map((key) => 			
						<div key = {key} className='clickable' >	        
	            			<div className='list' onClick={()=>this.handleClick(key)}>{authorsData[key].fullName}</div>
        				</div> 
						)}  
					</div>
					<div className='drop-list'>
						<AuthorInfo  data = {authorsData[chosenAuthorId] || authorsData['Author1']} authorId={chosenAuthorId} />
					</div>
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
export default connect(select)(Authors)