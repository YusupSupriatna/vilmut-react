import { render } from '@testing-library/react';
import React, { Component } from "react";
require('dotenv').config();

class Content extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            {/* Content Wrapper. Contains page content */}
            
            {this.props.component}
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}
            </div>

        );
    }
}
export default Content;