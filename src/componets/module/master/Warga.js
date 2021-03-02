import React, {Component} from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import DataTable from '../../scripts/Datatable'

class Warga extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const columns = [
            {
            name: "NO",
            selector: "serial",
            sortable: true
            },
            {
            name: "PERAN",
            selector: "peran",
            sortable: true
            },
            {
            name: "NIK",
            selector: "nik",
            sortable: true
            }
            ,
            {
            name: "NAMA",
            selector: "nama",
            sortable: true,
            right: true
            }
            ,
            {
            name: "TEMPAT LAHIR",
            selector: "tmp_lahir",
            sortable: true,
            right: true
            }
            ,
            {
            name: "TANGGAL LAHIR",
            selector: "tgl_lahir",
            sortable: true,
            right: true
            }
            ,
            {
            name: "RUMAH",
            selector: "rumah",
            sortable: true,
            right: true
            }
            ,
            {
            name: "STATUS",
            selector: "status",
            sortable: true,
            right: true
            }
            ,
            {
            cell:(row) => (
                <ButtonGroup aria-label="Basic example" size="sm">
                    <Button variant="info" color="blue" className="blue">
                    <i className="nav-icon fas fa-edit" />

                    </Button>
                    <Button variant="danger" color="" className="red">
                        <i className="nav-icon fas fa-trash" />
                    </Button>
                </ButtonGroup>
                ),
            name: "ACT",
            selector: "act",
            sortable: true,
            right: true,
            button:true
            }
        ];
        // const ButtonAction = ({})=>(
            
        // );



        const data =[
            {
                'serial': '1',
                'peran': 'Kepala Keluarga',
                'nik': '345362453244323',
                'nama': 'Yusup Supriata',
                'tmp_lahir': 'Prungkuda Kab.Sukabumi Cipanggulaan Rt7/02',
                'tgl_lahir': '16-05-1992',
                'rumah': 'Kontrakan',
                'status': 'Menikah',
                'act': ' <Button variant="info" color="blue" className="blue">Edit</Button>'
            }
        ];

        const MyFilter= ()=>{
            
        }

    

        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Master Warga</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Master</a></li>
                            <li className="breadcrumb-item active">Warga</li>
                            </ol>
                        </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                <div className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <DataTable title="Test" columns={columns}  data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Warga;