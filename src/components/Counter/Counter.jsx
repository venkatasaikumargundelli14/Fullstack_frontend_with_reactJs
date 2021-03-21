import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
  constructor () {
    super ();
    this.state = {
      counter : 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }

  render() {
    return (
      <div className="Counter">
       <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
       <CounterButton by={5} incrementMethod={this.increment}  decrementMethod={this.decrement}/>
       <CounterButton by={10} incrementMethod={this.increment}  decrementMethod={this.decrement}/>
       <span className="count">{this.state.counter}</span>
       <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    )
  }

  increment (by) {
console.log(`increment by parent ${by}`)
    this.setState (
     /* {
      counter : this.state.counter + by
      }*/
      (prevState) => {
        return {counter : prevState.counter + by}
      }
    )
  }

  decrement (by) {
    console.log(`decrement by parent ${by}`)
        this.setState (
         /* {
          counter : this.state.counter + by
          }*/
          (prevState) => {
            return {counter : prevState.counter - by}
          }
        )
      }

  reset () {
    this.setState (
      {
        counter : 0
      }
    )
  }

}
 

  class CounterButton extends Component{

    constructor (){
      super(); //Error 1 developers do
      this.state = {
        counter : 0
      }

      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this);
      
    }

    

    //render = () =>{
    render () {

      //let style ={fontSize: "50px", padding : "15px 30px"};
      return(
        <div class="counter">
          <button onClick={this.increment}>+{this.props.by}</button>
          <button onClick={this.decrement}>-{this.props.by}</button>
          {/*<span className="count">
          {this.state.counter}</span>*/}
        </div>
      )
    }

    //increment = () => {
    increment () {
      console.log('Inrement');
     this.setState(
      /* {
        counter : this.state.counter + this.props.by
       }*/
       (prevState) => {
         return {counter : prevState.counter + this.props.by}
       }
     )
     this.props.incrementMethod(this.props.by)
  }

  decrement () {
    console.log(`decrement ${this.props.by}`);
   

    this.props.decrementMethod(this.props.by)
  }
 }



 CounterButton.defaultProps ={
   by : 1
 }

 CounterButton.propTypes = {
   by : PropTypes.number
 }


 
 export default Counter