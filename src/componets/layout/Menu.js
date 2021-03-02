import React, { Component } from "react";
import GenerateMenus from '../other/GenerateMenus';


class Menu extends Component{
    
    render(){
        return(
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ panelAutoHeight:true }}>
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src={'/dist/img/AdminLTELogo.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">e-Komunitas</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar" style={{ maxHeight:70+'rem'}}>
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={'/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Yusup Supriatna</a>
                    </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <GenerateMenus />
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

        );
    }
}
export default Menu;