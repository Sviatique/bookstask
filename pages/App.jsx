import React from 'react'
import { Link } from 'react-router'
import Books from './Books.jsx';
class App extends React.Component{
  
  render() {
    return (
      <div>
        <ul role="nav">
          
  <li><Link to="/Books"  activeStyle={{ color: 'red' }}>Books</Link></li>
  <li><Link to="/Authors" activeStyle={{ color: 'red' }}>Authors</Link></li>
        </ul>
        
        
        {this.props.children}
      </div>
    )
  }
}

export default App;