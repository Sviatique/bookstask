import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Books from './components/Books.jsx';

class App extends React.Component{
  
  render() {
    return (
      <div>
        <div className='list'> 
            <div className='list-item' >
              <Link to={{
                  pathname : '/Books'
                }}>
                Books
              </Link>
            </div>
            <div className='list-item'>
              <Link to={{
                pathname: '/Authors'
              }}>
                Authors
              </Link> 
            </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
function select(state) {
   return {
     books: state.bookTaskApp
   }
}
export default connect(select)(App)