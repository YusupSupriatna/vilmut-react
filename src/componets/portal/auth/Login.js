import React, {Document, useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';


require('dotenv').config()
const logdIn =false;
class Login extends Component{
    constructor(props){
        super(props)

    }
    handleSubmit = e => {
        e.preventDefault();
        const data={
            'username' : this.username,
            'password' : this.password
        }
        
        axios({
            url:'/api/login',
            data:data,
            method:"POST",
        })
        .then(res => {
            localStorage.setItem('token', res.data.token.token);

            window.location.href = "/dashboard/pengunjung";
        })
        .catch(err =>{
            console.log(err);
        })
    }
    componentDidMount(){
        const users = false;
        const datas = [];
        
        const config={
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('token'),
            }
        }
        
        console.log(config);
        if(config){
            axios.get('/api/me', config).then(
                res=>{
                    return window.location = "/dashboard/pengunjung";
                }
                );
            }
        }


// .then(token => login(token));

    render(){
        console.log(logdIn);
        return(
            <div className="hold-transition login-page">

                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>e</b> - Komunitas</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={this.handleSubmit} method="POST">
                            <div className="input-group mb-3">
                            <input type="text" onChange={e=> this.username = e.target.value} className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope" />
                                </div>
                            </div>
                            </div>
                            <div className="input-group mb-3">
                            <input type="password" onChange={e=> this.password = e.target.value} className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-lock" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">
                                    Remember Me
                                </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col */}
                            </div>
                        </form>
                        {/* <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                            </a>
                        </div> */}
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;