import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {customers:null}
   
  }
 
  updateUser(users)
  {
    this.setState({customers : users})
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.updateUser(users))
  }
  render() { 
    return ( 
     
      <div className="App">
      {this.state.customers == null  ? <div> Loading in branch...</div> :
      <div>
      <Header/>
      <Body customers={this.state.customers}/>
      <Footer/>
      </div>
      }
    </div>
     );
  }
}
 
export default App;


