import React,{Component} from 'react';
import Child from './Child';


class App extends Component{
  //we can declare state outof  constructor but never create state outside the constructor
  // state={
  //   name: "React js"
  // }

  //1. constructor execute once
  constructor(){
    super();
    console.log("parent constructor called");
    //recomanded state declare here
    this.state={
      name: "React js"
    }

  }

  //2 .componentWillMoount execute once
  //before rednering, after constructor
  //use => when ever we want to update state before render the component.
  componentWillMount(){
    console.log("parent componentWillMount called");
    if(window.innerWidth < 500){
      this.setState({
        // name : "React Native"
        innerWidth: window.innerWidth
      })
    }
    
  }

  //4.componentDidMount
  //if componet successfully renderd, then only this hook will execute
  //here we can do Rest API call.
  componentDidMount(){
    console.log("parent componentDidMount called")
  }

  handleChange=()=>{
    this.setState({
      name:"React Native"
    })
  }

  //5 componentWillReceiveProps if component will receive any props
  componentWillReceiveProps(){
    console.log("parent componentWillReceiveProps called");
  }

  //6. take permission to updatation
  shouldComponentUpdate(){
    console.log("parent shouldComponentUpdate called");
    return true;
   
  }

  //7.
  componentDidUpdate(){

  }

  //8.
  componentWillUpdate(){

  }
  
  //9.
  componentWillUnmount(){
    
  }

  //3.render  After componentWillMount
  // if any change detected in state and props component will render again.(it is manadatory)
  //never set define hare(leads to infinite loop)
  render(){
    console.log("parent render called");
    return(
      <React.Fragment>
        <h1>{this.state.name}</h1>
        <h1>{this.state.innerWidth}</h1>
        <Child name={this.state.name}/>
        <button onClick={this.handleChange}>change state</button>
      </React.Fragment>
    )
  }
}

export default App;