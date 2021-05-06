import axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username,password){
        return axios.get('http://localhost:8080/basicauth',{headers : {authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username,password){
        return axios.post('http://localhost:8080/authenticate',{
            username,password
        })
    }


    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username,password){

        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password) 

        //console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createJwtToken(token))

    }

    createJwtToken(token){
        return 'Bearer ' + token
    }

    logout (){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn () {
        console.log('called')
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName () {
        
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader) {
        console.log("interceptor")
        
        axios.interceptors.request.use(
            
            (config) => {
                if(this.isUserLoggedIn()){
                    console.log("interceptor")
                 config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}

export default new AuthenticationService()