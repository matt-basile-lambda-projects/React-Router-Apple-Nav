import React from 'react';


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
                    return <a className="device-link">{device.name}</a>
                })}
            </div>
        )
    }
}

export default Nav;