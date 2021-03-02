
// export default App;
import React, {Component} from 'react';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Menu from './layout/Menu';

const AppContent = ({ component:Component, title:Title })=>(
  <Content   render={props=>(
        <Component {...props}></Component>
    )}>
  
  </Content>
);

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.children.title);
    return(
      <div>
        <Header />
        <Menu />
        <Content component={this.props.children} />
        <Footer />
      </div> 
    );
  }
}

export default App;