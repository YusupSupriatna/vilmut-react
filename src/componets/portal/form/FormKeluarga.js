import React, {Component } from 'react';
import {
    Alert,Navbar,
    Search, NavDropdown,
    FormControl, Card, 
    Nav, Form, Button,
    Container, Image,InputGroup, Table, ButtonGroup} from 'react-bootstrap';
import $, { ajax } from 'jquery';

class FormKeluarga extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        $.ajax({
            // type: "method",
            // url: "url",
            // data: "data",
            dataType: "dataType",
            success: function (response) {
                alert('tara')
            },
            error:function(){

                alert('error')
            }
        });

        event.preventDefault();
    }
    componentDidMount() {
        $('#formkeluarga').addClass('active');
    }
    
    render(){
        const data={
            'title': 'FORMULIR ISIAN DATA KELUARGA',
            'active': true,
        };

        
        // !this.setShow.open;
        
        // console.log(e);
        
        

        return(
            <div>
                
                <Container className="pt-5 ">

                <div className="col-md-12  justify-content-md-center">
                    <form role="form" onSubmit={this.handleSubmit}>
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

                                    <div id="content-form"></div>
                                    {/* <hr className="pb-3"></hr> */}
                                        <Alert show={true} variant="info">
                                            <Alert.Heading>Identifikasi data Warga terdaftar.</Alert.Heading>
                                            <p>
                                            Masukan NIK/KK ke field yang telah di sediakan, pastikan data anda telah di input/daftar pada form warga sebelumnya.<br /> Data warga yang belum terdaftar tidak dapat di proses oleh sistem jika warga hendak mengakses laman ini . 
                                            </p>
                                            <hr />
                                            <div className="d-flex justify-content-center">
                                                <div className="col-md-6">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Prepend>
                                                        <InputGroup.Text>NIK/KK</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control type="text"  value={this.state.value} onChange={this.handleChange}/>
                                                        {/* <ButtonGroup>
                                                            <Button variant="secondary">Masuk</Button>
                                                        </ButtonGroup> */}
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </Alert>
                                        <h5>IDENTITAS KEPALA KELUARGA</h5>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Nama Kepala Keluarga</th>
                                                    <th>RT/Blok</th>
                                                    <th>Alamat Lengkap</th>
                                                    <th>Tlp/HP</th>
                                                    <th>Status Tempat</th>
                                                    <th>Keterangan</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                        <h5>JUMLAH ANGGOTA KELUARGA (termasuk Kepala Keluarga)</h5>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th className="text-center">Nama Lengkap</th>
                                                    <th className="text-center">Tempat/Tgl Lahir</th>
                                                    <th className="text-center">J Kelamin (LP)</th>
                                                    <th className="text-center">Agama</th>
                                                    <th className="text-center">Status Keluarga(Suami, Istri, Anak, Mertua, Orang Tua)</th>
                                                    <th className="text-center">Status Pernikahan(Menikah, Belum Menikah, Janda, Duda)</th>
                                                    <th className="text-center">Pekerjaan</th>
                                                    <th className="text-center">Alamat Lengkap (Sesuai KTP)</th>
                                                    <th className="text-center">Tlepon HP</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                </Container>
                            </div>
                            {/* /.card-body */}
                            <Card.Footer className="text-muted text-right">
                                <Button type="submit" variant="success" className="labeled icon hidden mr-2" ><i className={"nav-icon fas fa-key"} /> Masuk</Button>
                                {/* <Button variant="success" className="labeled icon hidden"><i className={"nav-icon fas fa-save"} /> Simpan Data</Button> */}
                            </Card.Footer>
                            </div>
                        </form>
                    </div> 

                </Container>
            </div>
        );
    }
}

export default FormKeluarga;