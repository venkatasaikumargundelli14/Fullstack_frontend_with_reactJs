import axios from "axios";
import { API_URL,JPA_API_URL } from '../../Constants'

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
        //returning promise
    }

    retrieveTodo(name,id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //returning promise
    }

    deleteTodo(name,id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //returning promise
    }

    updateTodo(name,id,todo) {
        console.log('update service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo);
        //returning promise
    }

    createTodo(name,todo) {
        console.log('Create service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo);
        //returning promise
    }


}

export default new TodoDataService();