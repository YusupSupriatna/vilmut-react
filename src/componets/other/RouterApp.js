import React, {Document} from 'react';
import Layouts from '../Layout';
import LoginRegisterLayouts from '../LoginRegister';
import PortalLayout from '../PortalLayout';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react';
// import axios from 'axios';

import axios from 'axios';
// ROUTE CONTROLLER

//Portal Style
import LoginRegister from '../portal/auth/Login';
import FormWarga from '../portal/form/FormWarga';

//Dashboard
import Pengunjung from '../module/dashboard/Pengunjung';
import Pengguna from '../module/dashboard/Pengguna';
import FormKeluarga from '../portal/form/FormKeluarga';
import Komunitas from '../module/dashboard/Komunitas';

//Master
import Warga from '../module/master/Warga';


const routingList =[
    {
        'path': '/dusunbambu/fromwarga',
        'comp': FormWarga,
        'layout': PortalLayout
    },
    {
        'path': '/dusunbambu/formkeluarga',
        'comp': FormKeluarga,
        'layout': PortalLayout
    },
    //Auth Login
    // {
    //     'path': '/login',
    //     'comp': LoginRegister,
    //     'layout': LoginRegisterLayouts
    // },
    //End Auth Login
    {
        'path': '/dashboard/pengunjung',
        'comp': Pengunjung,
        'layout': Layouts
    },
    {
        'path': '/dashboard/pengguna',
        'comp':  Pengguna,
        'layout': Layouts
    },
    {
        'path': '/dashboard/komunitas',
        'comp':  Komunitas,
        'layout': Layouts
    },
    
    // Master 
    {
        'path': '/master/warga',
        'comp':  Warga,
        'layout': Layouts
    },

];


const AppRoute = ({component:Component, layout:Layout, title:Title, ...rest})=>
(
    <Route {...rest} render={props=>(
        <Layout>
            <Component {...props}></Component>
        </Layout>
    )}>
        
    </Route>
)

const MappingRoute =  routingList.map((items)=>{
    return(
        <AppRoute path={items.path} layout={items.layout} exact title="Dashboard" component={items.comp} />
    );
});

class RouterApp extends Component{
    
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     // console.log(localStorage.getItem('token'));
    //     const users = false;
    //     const datas = [];
        
    //     const config={
    //         headers:{
    //             'Authorization':'Bearer '+localStorage.getItem('token'),
    //         }
    //     }
        
        
    //     if(config){
    //         axios.get('/api/me', config).then(
    //             res=>{
    //                 // alert("tara");
    //                 this.logIn = true;
    //             },
    //             err=>{
    //                 this.logIn = false;
    //             }
    //         );
    //     }

    // }
    

    hendelLogOut = e =>{
        localStorage.removeItem('token');
        return window.location = "/login";
    };
    
    render(){
        const users = false;
        const datas = [];
        const logIn = false;
        const config={
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('token'),
            }
        }
        
        if(localStorage.getItem('token')){
            this.logIn = true;
        }else{
            this.logIn = false;
        }
        
    //     const ligh = axios.get('/api/me', config).then(
    //        res=>{
    //         //    alert('tara')
    //            return  true;

    //        },
    //        err=>{
    //            return false;
    //        }
    //    );
        // const logIn = function(config){
        
        // }

        if(this.logIn){
            return(
                <Router>
                    {/* {logdIn = true?(<Redirect to='/dashboard/pengunjung' exact  />):(<Redirect to='/login'  />)} */}
                    {/* <Redirect to='/login'  /> */}
                    <AppRoute path='/login' exact layout={LoginRegisterLayouts} exact title="Login" component={LoginRegister} />
                    <Switch>
                        {MappingRoute}
                    </Switch>
                </Router>
            );
        }
        return(
        <Router>
                <Redirect to='/login'/>
                <Switch>
                    <AppRoute path='/login' exact layout={LoginRegisterLayouts} exact title="Login" component={LoginRegister} />
                </Switch>
            </Router>
        );
    
    }
}

export default RouterApp;