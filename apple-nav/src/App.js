import React, { Component } from 'react';
import NavWrapper from './components/NavWrapper';
import './App.css';
import AppleProducts from './appleData.json';

class App extends Component {
  constructor(){
    super();
    this.state={
        appleProducts: AppleProducts,
    }
  }

  componentDidMount(){
    this.setState({appleProducts:AppleProducts})
  }

  render() {
    if(this.state.appleProducts.length <0){
      return <div>Loading Apple Products</div>
    }
    return (
      
      <div className="App">
        <NavWrapper appleProducts={this.state.appleProducts}/>
      </div>
    );
  }
}

export default App;
