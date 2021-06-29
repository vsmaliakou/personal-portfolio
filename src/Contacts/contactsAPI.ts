import axios from "axios";

export const emailAPI = {
    sendMessage(name: string, contacts: string, message: string){
        return axios.post('https://vsmaliakou-smtp-nodejs-server.herokuapp.com/sendMessage', {name, contacts, message})
    }
}