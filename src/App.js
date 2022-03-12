
import React from 'react';

import Form from './Form'

class App extends React.Component{

  constructor(){
    super();
    this.state={
      count:0
    }
  }

  onclickHandler=()=>{
 this.setState({
   count:this.state.count + 1
 })
  }

  onclickHandler1=()=>{
    if(this.state.count!==0){
      this.setState({
        count:this.state.count - 1
      })
    }
   
     }


  render(){
    return(
      <div>
        <h1> {this.state.count} </h1>
    <Form onclickHandler={this.onclickHandler} onclickHandler1={this.onclickHandler1}/>
      </div>
    )
  }

  
}




export default App;
