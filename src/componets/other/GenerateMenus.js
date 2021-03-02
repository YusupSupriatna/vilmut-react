import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';



class GenerateMenus extends Component{
    render(){
        
        const menuList = [
            {
                'icon'  : 'tachometer-alt',
                'perms' : '#',
                'path'  : 'javascript();',
                'name'  : 'Dashboard',
                'onclick'  : false,
                'sub'   : [
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/dashboard/pengunjung',
                        'name'  : 'Pengunjung',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/dashboard/pengguna',
                        'name'  : 'Pengguna',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/dashboard/komunitas',
                        'name'  : 'Komunitas',
                        'onclick'  : false,
                        'sub'   : []
                    },
                ]
            },
            {
                'icon'  : 'list',
                'perms' : '#',
                'path'  : '/komunitas',
                'name'  : 'Kominitas Terdaftar',
                'onclick'  : false,
                'sub'   : []
            },
            {
                'icon'  : 'users',
                'perms' : '#',
                'path'  : 'javascript();',
                'name'  : 'Data Warga',
                'onclick'  : false,
                'sub'   : []
            },
            {
                'icon'  : 'file',
                'perms' : 'javascript();',
                'path'  : '/master',
                'name'  : 'Master',
                'onclick'  : false,
                'sub'   : [
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/inventaris',
                        'name'  : 'Inventaris',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/jenis-dokumen',
                        'name'  : 'Jenis Dokumen',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/kategori-iuran',
                        'name'  : 'Kategori Iuran',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/kategori-pengaduan',
                        'name'  : 'Kategori Pengaduan',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/lingkungan',
                        'name'  : 'Lingkungan',
                        'onclick'  : false,
                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/master/warga',
                        'name'  : 'Warga',
                        'onclick'  : false,
                        'sub'   : []
                    }
                ]
            },
            {
                'icon'  : 'wrench',
                'perms' : '#',
                'path'  : '/setting',
                'name'  : 'Settings',
                'onclick'  : false,
                'sub'   : [
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '/setting',
                        'name'  : 'Role Akses',
                        'onclick'  : false,

                        'sub'   : []
                    },
                    {
                        'icon'  : 'circle',
                        'perms' : '#',
                        'path'  : '#',
                        'onclick'  : true,
                        'name'  : 'Log Out',
                        'sub'   : []
                    }
                ]
            }
        ];
        // const submitLogout = e =>{
        //     alert("ra")
        //     localStorage.removeItem('token');
        //     return window.location = "/login";
        //   }
        const MenuRoute = menuList.map((item, key)=>{
            const logout = e => {
                // alert('tara');
                localStorage.clear();
                window.location.href = '/login';
            }
            // console.log(key);
            // console.log(item.sub.length)
            var open = '';
            if(key == 0){
                open = "menu-open";
            }
            return(
                <Router>
                    <li className={"nav-item "+(item.sub.length!==0?("has-treeview "+open):"")+" "}>
                        <a href={item.path} className="nav-link">
                            <i className={"nav-icon fas fa-"+item.icon} />
                            <p>
                            {item.name}
                            {item.sub.length!==0?(<i className='right fas fa-angle-left' />):""}
                            </p>
                        </a>
                        <If condition={item.sub.length>0}>
                            <Then>
                                <ul className="nav nav-treeview">
                                        {item.sub.map((items)=>{
                                            return(
                                                <li className="nav-item">
                                                    <If condition={items.onclick == false}>
                                                        <Then>
                                                            <a href={items.path} className="nav-link " >
                                                                <i className={"far nav-icon fa-"+items.icon} />
                                                                <p>{items.name}</p>
                                                            </a>
                                                                {/* { console.log(logout) } */}
                                                        </Then>
                                                        <Else>
                                                            <Then>
                                                                {/* { console.log(logout) } */}
                                                                <a href={items.path} className="nav-link logout" onClick={logout}>
                                                                    <i className={"far nav-icon fa-"+items.icon} />
                                                                    <p>{items.name}</p>
                                                                </a>
                                                            </Then>
                                                        </Else>
                                                    </If>

                                                </li>
                                            );
                                        })}
                                </ul>
                            </Then>
        
                        </If>
                        {/* {item.sub.map((itms)=>{
                            
                            return();
                        })} */}
                    </li>
                </Router>
            );
        });

        return(
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {MenuRoute}
            </ul>
        );
    }
}

export default GenerateMenus;