import React from 'react';
import Nav from './Nav';
import SubNav from './SubNav';
import {Route} from 'react-router-dom'


class NavWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            appleProducts: props.appleProducts
        }
        
    }
    render(){
    
    return(

        <div>
            <Nav appleProducts={this.state.appleProducts}/>
            <Route path='/:name' render={props=> <SubNav {...props} deviceData={this.state.appleProducts}></SubNav>}></Route>
        </div>
    )
    }
}

export default NavWrapper