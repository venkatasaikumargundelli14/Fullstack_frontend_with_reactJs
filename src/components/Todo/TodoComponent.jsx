import { ErrorMessage, Field, Form, Formik } from 'formik'
import moment from 'moment'
import React,{Component} from 'react'
import TodoDataService from '../../api/Todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component
{
    constructor(props){
        super(props)

        this.state= {
            id: this.props.match.params.id,
            description: '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.validate=this.validate.bind(this);
    }

    componentDidMount(){

        if(this.state.id===-1){
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
        .then(response=>this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }
    validate(values){
        let error = {}
        if(!values.description){
            error.description="Enter a Description"
        }else if(values.description.length<5){
            error.description="Please enter atleast 5 char description"
        }

        if(!moment(values.targetDate).isValid())
        {
            error.targetDate="Enter a valid targateDate"
        }

        return error
    }

    onSubmit(values){
        let username=AuthenticationService.getLoggedInUserName()

        let todo ={
            id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
        }
        console.log(this.state.id)

        if(this.state.id==='-1'){
            console.log(this.state.id)
            TodoDataService.createTodo(username,  todo).then(() => this.props.history.push('/todos'))
            console.log('create');
        }
        else {
            TodoDataService.updateTodo(username, this.state.id,todo).then(() => this.props.history.push('/todos'))
            console.log('update');
        }
    }

    render (){
        let {description,targetDate} =this.state
        //let targetDate= this.state.targetDate

        return   (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik 
                    initialValues={{description,targetDate}} 
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    validate={this.validate}>
                        {
                            (props)=>(
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="Date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit" >Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent