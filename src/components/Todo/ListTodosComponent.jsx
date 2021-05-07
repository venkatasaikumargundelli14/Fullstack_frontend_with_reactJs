import React , {Component} from 'react'
import TodoDataService from '../../api/Todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos :
            [
                // {id: 1, description: "Learn React", done:false, targetDate: new Date()},
                // {id: 2, description: "Become an expert in Reactworld" , done:false, targetDate: new Date()},
                // {id: 3, description: "Excellent javascript library", done:false, targetDate: new Date()}
            ],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodo = this.refreshTodo.bind(this);
    }
    componentDidMount() {
        this.refreshTodo()
        
    }

    refreshTodo() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response=>{
                
                this.setState({todos : response.data})
            }
            )

    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        console.log(username,id)
        TodoDataService.deleteTodo(username, id)
        .then(
            response =>{
                this.setState({
                    message: `Deleted ${id} successfully`
                })
                this.refreshTodo()
            }
        ).catch(error => error)

    }

    addTodoClicked(){
        this.props.history.push('/todos/-1')
    }

    updateTodoClicked(id) {
        console.log('Update'+id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // console.log(username,id)
        // TodoDataService.deleteTodo(username, id)
        // .then(
        //     response =>{
        //         this.setState({
        //             message: `Deleted ${id} successfully`
        //         })
        //         this.refreshTodo()
        //     }
        // )

    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table"> 
                        <thead>
                            <tr>
                                
                                <th>DESCRIPTION</th>
                                <th>IS COMPLETED</th>
                                <th>TARGATE DATE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                           
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked} >Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent