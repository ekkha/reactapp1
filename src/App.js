import React from 'react';
import Classical from "./Classical";
import Functional from "./Functional";
import"./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      functionclick:false,
      classclick:false
    };
  }
  render(){
    return(
      <>
      <h1 className='top'>Styling using Functional and Class Component</h1>
      
      <div className='box1'>
      <button type='button' onClick={()=>this.setState({functionclick: !this.state.functionclick})}>To see styling in Functional Component</button>
      <button type='button' onClick={()=>this.setState({classclick: !this.state.classclick})}>To see styling in Class Component</button>
      </div>


      <div className='box2'>
      {this.state.functionclick && <Functional />}
      {this.state.classclick && <Classical />}
      </div>


      </>
    )
  }
}

export default App;