import React, {Document} from 'react';
import { Component } from 'react';
import HeaderLink from './layout/HeaderLink';
// import FormWarga from './portal/form/FormWarga';

class PortalLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
       return(
           <div>
               <HeaderLink />
               {this.props.children}
           </div>
        );
    }
}

export default PortalLayout;