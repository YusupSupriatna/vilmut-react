import React, {Document} from 'react';
import {Navbar, NavDropdown, FormControl, Card, Nav, Form, Button, Container, Image} from 'react-bootstrap';
import { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter as Router} from 'react-router-dom';
// import { Router } from 'react-router-dom';

class FromWarga extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        $('#fromwarga').addClass('active');
      }
    render(){
        const data={
            'title': 'FORMULIR ISIAN DATA WARGA',
            'active': true,
        };

        return(
            <div>
                
                <Container className="pt-5 ">
                    <div className="col-md-12 justify-content-md-center">
                        <div className="card card-sucess ">
                            <div className="card-header">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-2 pt-3 ">
                                        <center>
                                            <Image src="/dist/img/AdminLTELogo.png" width='90' thumbnail />
                                        </center>
                                    </div>
                                    <div className="col-md-10 pt-3">
                                        <center>
                                            <p className="pt-0 m-0">
                                                <h2>  
                                                    <i className={"nav-icon fas fa-user"} /> {data.title}
                                                    {/* <br/>_______________________________________ */}
                                                </h2>
                                            </p>
                                            <hr height="2" color="#000" width="77%" className="mb-1 mt-4"></hr>
                                            <p>
                                                
                                                Perum Panyawangan Komplek garcinia RT 01/02, Kec. Gauluh Pakuan, Kab. Banjar, Lebak Sari asih
                                            </p>
                                        </center>
                                    </div>
                                </div>
                                {/* <h3 className="card-title">General Elements</h3> */}
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <Container>

                                    
                                    {/* <hr className="pb-3"></hr> */}
                                    <form role="form">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-10 row ">
                                            <div className="form-group col-md-6">
                                                <label>Nama Warga</label>
                                                <input type="text" className="form-control" placeholder="Nama Warga ..." />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Tanggal Lahir</label>
                                                <input type="text" className="form-control" placeholder="YYYY-mm-dd" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Jenis Kelamin</label>
                                                <div className="row pl-2">
                                                    <div className="form-check col-md-6 pt-2">
                                                        <label className="form-check-label">
                                                            <input name="gender" className="form-check-input" type="radio" />
                                                            Laki-laki</label>
                                                    </div>
                                                    <div className="form-check col-md-6 pt-2">
                                                        <label className="form-check-label">
                                                        <input name="gender" className="form-check-input" type="radio" defaultChecked />
                                                            Perempuan</label>
                                                    </div>
                                                </div>

                                                {/* <input type="text" className="form-control" placeholder="Nama Warga ..." /> */}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Agama</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                                {/* <input type="text" className="form-control" placeholder="Agama ..." /> */}
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>Alamat Lengkap</label>
                                                <textarea className="form-control" rows={3} placeholder="Alamat ..." defaultValue={""} />

                                                {/* <input type="text" className="form-control" placeholder="Nama Warga ..." /> */}
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label>Himpunan</label>
                                                <input type="text" className="form-control" placeholder="Conto (Blok / RT)" />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label>Tlp/HP</label>
                                                <input type="text" className="form-control" placeholder="+(62)xxx xxxx xxxx" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label>Status dalam Keluarga</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                                {/* <input type="text" className="form-control" placeholder="+(62)xxx xxxx xxxx" /> */}
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label>Status Tinggal</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                                {/* <input type="text" className="form-control" placeholder="+(62)xxx xxxx xxxx" /> */}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Status Pernikahan</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                                {/* <input type="text" className="form-control" placeholder="+(62)xxx xxxx xxxx" /> */}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Pekerjaan</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                                {/* <input type="text" className="form-control" placeholder="+(62)xxx xxxx xxxx" /> */}
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6 row">
                                        </div>
                                        
                                        <div className="col-md-6"></div>
                                        <div className="col-sm-3">
                                        {/* text input */}

                                        </div>
                                        <div className="col-sm-6">
                                            {/* <div className="form-group">
                                                <label>Text Disabled</label>
                                                <input type="text" className="form-control" placeholder="Enter ..." disabled />
                                            </div> */}
                                        </div>
                                    </div>
                                    
                                    </form>
                                </Container>
                            </div>
                            {/* /.card-body */}
                            <Card.Footer className="text-muted text-right">
                                <Button variant="success" className="labeld icon"><i className={"nav-icon fas fa-save"} /> Daftarkan</Button>
                            </Card.Footer>
                            </div>
                    </div> 

                </Container>
            </div>
        );
    }
}

export default FromWarga;