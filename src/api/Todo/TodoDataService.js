import axios from "axios";

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/todos`);
        //returning promise
    }

    retrieveTodo(name,id) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        //returning promise
    }

    deleteTodo(name,id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
        //returning promise
    }

    updateTodo(name,id,todo) {
        console.log('update service')
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`,todo);
        //returning promise
    }

    createTodo(name,todo) {
        console.log('Create service')
        return axios.post(`http://localhost:8080/users/${name}/todos/`,todo);
        //returning promise
    }


}

export default new TodoDataService();