import React, {Component, Document} from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });
  const [title,columns,data] ="";


  const MyDatatable = ({titile, columns, data}) => (
        // { conole.log(title) }
        // <div className="raw">TEst</div>
        <DataTable 
          // title="Grid Warga "

          className="table table-bordered"
          // noHeader='false'
          columns={columns}
          data={data}
          defaultSortField="title"
          pagination
          // theme="solarized"
          // selectableRows
          // selectableRowsComponent={BootyCheckbox}
        />
  );



  
  // class Datatable extends Component{
  //     render(){
  //       return(<MyDatatable />);
  // }
  // }

  export default MyDatatable;