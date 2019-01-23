import React from 'react';


class SubNav extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state ={
            appleProducts: props.deviceData,
            products: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.name;
        // do something with the id
      }

    render(){
        console.log(this.state.appleProducts);
        const device = this.state.appleProducts.Devices.find(device => this.props.match.params.name === device.name);
        console.log(device.types);
        return(
            <div>
                {device.types.map(link =>{
                 return  <a>{link}</a>
                })}
            </div>
        )
    }
}

export default SubNav;