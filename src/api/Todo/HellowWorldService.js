import axios from "axios";

class HelloWorldService {

    executeHelloWorldService() {
        console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
        //returning promise
    }

    executeHelloWorldBeanService() {
        console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');
        //returning promise
    }

    executeHelloWorldPathVariableService(name) {
        console.log('executed service')
        // let username='venkata'
        // let password='dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username +":"+ password)
        
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        // {
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // }
        );
        //returning promise
    }

}

export default new HelloWorldService();