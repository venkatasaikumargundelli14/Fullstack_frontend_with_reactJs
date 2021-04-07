import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import ShowError from './ShowError.jsx'

class LoginComponent extends Component {

    constructor (props) {
        super (props)
        this.state = {
            username : 'venkata',
            password : '',
            hasShowSuccesMesg : false,
            hasShowFailMesg : false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange (event) {
        console.log(event.target.name)
        this.setState (
            {
                [event.target.name]:event.target.value
            }
        )
    }
    loginClicked () {
        // if(this.state.username==='venkata' && this.state.password==='dummy')
        // {
        // AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        // this.props.history.push(`/welcome/${this.state.username}`)
        // //this.setState({hasShowSuccesMesg : true})
        // //this.setState({hasShowFailMesg : false})
        // }
        // else{
        // console.log("failed")
        // //this.props.history.push("/err")
        // this.setState({hasShowFailMesg : true})
        // this.setState({hasShowSuccesMesg : false})
        // }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username,this.state.password) 
        .then(()=>{
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(() =>{
            this.setState({hasShowFailMesg : true})
            this.setState({hasShowSuccesMesg : false})
        })

    }

    // handleUsernameChange (event) {
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange (event) {
    //     this.setState({password:event.target.value})
    // }

    render () {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* /*<ShowSuccess hasShowSuccesMesg={this.state.hasShowSuccesMesg}/>*/}
                    {this.state.hasShowSuccesMesg && <div>Login successfully</div>}
                    <ShowError hasShowFailMesg={this.state.hasShowFailMesg} />
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent