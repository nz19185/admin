import axios from '../untils/axio'
class Admin{
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
    let url = '/hehe/user/updatePs'
    return axios.post(url,_id)

}

}

export default new Admin()

