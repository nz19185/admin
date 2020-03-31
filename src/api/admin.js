
import axios from '../untils/axio'
class Admin{
    // 注册
    reg({us,ps}){
        let url = '/hehe/user/reg'
        return axios.get(url,{us,ps})
      }
      // 登录
      login({us,ps}){
        let url = '/hehe/user/login'
        return axios.post(url,{us,ps})
      }
    //获取管理员接口
 adminList(){
     let url='/hehe/user/list'
     return axios.post(url)
 }
 //删除管理员的接口
 deladmin(_id){
     let url='/hehe/user/del'
     return axios.post(url,_id)
 }
//修改密码
updatePs(_id){
    let url='/hehe/user/updatePs'
    return axios.post(url,_id)

}

}

export default new Admin()


