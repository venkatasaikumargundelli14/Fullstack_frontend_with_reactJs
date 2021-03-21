import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
//import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx'



class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                {/* My Todo Application */}
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path ="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path ="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route  component={ErrorComponent}/>
                            <Route  path="/err" component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                
            </div>

        )
    }
}

/*function ShowSuccess (props){
    if(props.hasShowSuccesMesg){
        return <div>Login successfully</div>
    }
    return null
}*/


export default TodoApp