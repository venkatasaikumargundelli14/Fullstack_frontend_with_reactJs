import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/Todo/HellowWorldService.js'

class WelcomeComponent extends Component {

    constructor(props){
        super(props) 
        this.state ={
            welcomeMessage : '',
            errorMessage : ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
    }
    render () {
        return (
            <>
            <h1>Welcome ..!</h1>

            <div className="container" >
                Welcome to {this.props.match.params.name}.
                You can manage todo list <Link to="/todos">here</Link>.
             </div>
             <div className="container" >
                Click here to get customized welcome message
                <button className="btn btn-success "
                  onClick={this.retrieveWelcomeMessage}>Get welcome message</button>
             </div>
             <div className="container">
                 {this.state.welcomeMessage}
             </div>

             <div className="container1" >
                 {this.state.errorMessage}
                 <style jsx>
                     {`
                     .container1 {
                         color: red;
                     }
                     
                     `}
                 </style>

             </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        console.log('retrieve clicked')
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleWelcomeMessage(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleWelcomeMessage(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessResponse(response))
        .catch(error => this.handleErrorResponse(error))
    }

    handleSuccessResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleErrorResponse(error){
        console.log(error.response)
        console.log(error.message)
        let errorMessage='';

        if(error.message)
            errorMessage+=error.message

        if(error.response && error.response.data)
        errorMessage+=error.response.data.message

        this.setState({errorMessage: errorMessage})
    }
}

export default WelcomeComponent