import React from 'react';
import Nav from './Nav';
import SubNav from './SubNav';


class NavWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
        
    }
    render(){
   console.log(this.props)
    return(
        <Nav appleProducts={this.props.appleProducts}/>
        // <SubNav appleProducts={props.appleProducts} />
    )
    }
}

export default NavWrapper