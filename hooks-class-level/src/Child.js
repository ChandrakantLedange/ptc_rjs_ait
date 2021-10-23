import React,{Component} from 'react';


class Child extends Component{
  //we can declare state outof  constructor but never create state outside the constructor
  // state={
  //   name: "React js"
  // }

  //1. constructor execute once
  constructor(props){
    super(props);
    console.log("Child constructor called");
    //recomanded state declare here
    

  }

  //2 .componentWillMoount execute once
  //before rednering, after constructor
  //use => when ever we want to update state before render the component.
  componentWillMount(){
    console.log("Child componentWillMount called");
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
    console.log("Child componentDidMount called")
  }

  //3.render  After componentWillMount
  // if any change detected in state and props component will render again.(it is manadatory)
  //never set define hare(leads to infinite loop)
  render(){
    console.log("Child render called");
    return(
      <React.Fragment>
        <h1>{this.props.name}</h1>
      </React.Fragment>
    )
  }
}

export default Child;