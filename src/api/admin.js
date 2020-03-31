import axios from '../utils/axios'
class Admin {
  reg({us,ps}){
    let url = '/hehe/user/reg'
    return axios.get(url,{us,ps})
  }
  login({us,ps}){
    let url = '/hehe/user/login'
    return axios.post(url,{us,ps})
  }
}

export default new Admin()