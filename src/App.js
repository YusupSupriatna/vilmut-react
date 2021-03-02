import React, {Component} from 'react';
import RouterApp from "./componets/other/RouterApp";
import Datatable from "./componets/scripts/Datatable";

class App extends Component{

  render(){
    
    // console.log(routerList)
    return(
      <div>
        <RouterApp />
      </div> 
    );
  }
}

export default App;