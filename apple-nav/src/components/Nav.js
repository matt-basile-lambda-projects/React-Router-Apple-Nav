import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            appleProducts: props.appleProducts,
        }
    }
    render(){
        let devices = this.state.appleProducts.Devices;
        console.log(devices);
        return(
            <div>
                {devices.map(device =>{
                    return <Link className="device-link" to={`/${device.name}`}>{device.name}</Link>
                })}
            </div>
            
        )
    }
}

export default Nav;