import React from 'react'
import { Link } from 'react-router'
import Books from './Books.jsx';
class App extends React.Component{
  
  render() {
    return (
      <div>
        <div className="list"> 

            <div className="list-item"><Link to="/Books"  activeStyle={{ color: 'red' }}>Books</Link></div>
            <div className="list-item"><Link to="/Authors" activeStyle={{ color: 'red' }}>Authors</Link> </div>
        </div>
        
        
        {this.props.children}
      </div>
    )
  }
}

export default App;