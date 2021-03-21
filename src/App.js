import React, { Component } from 'react'
//import FirstComponent, {FifthComponent } from './components/learing-modules/FIrstComponent'
//import SecondComponent from './components/learing-modules/SecondComponent'
//import ThirdComponent from './components/learing-modules/ThirdComponent'
//import Counter from './components/Counter/Counter'
import TodoApp from './components/Todo/TodoApp'
    
import './App.css';
import './bootstrap.css';
     
    class App extends Component {
      render() {
        return (
          <div className="App">
           {/*<Counter />*/}
           <TodoApp/>
          </div>
        )
      }
    }


    // class LearningComponents extends Component {
    //   render() {
    //     return (
    //       <div className="App">
    //         My Hello world...
    //         <FirstComponent />
    //         <SecondComponent/>
    //         <ThirdComponent></ThirdComponent>
    //         <FourthComponent></FourthComponent>
    //         <FifthComponent/>
    //       </div>
    //     )
    //   }
    // }

//function component
    // function FourthComponent (){
    //   return(
    //     <div class="fourthComponent">
    //       FourthComponent
    //     </div>
    //   )
    // }

    export default App