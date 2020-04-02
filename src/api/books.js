import axios from '../untils/axio'
class Books {
  findOne(_id){
    let url ='/hehe/book/update'
    return axios.post(url,_id)
  }
//   bookList(page,pageSize){
//     // localhost:3000/goods?page=1&pageSize=5
//     let url ='/hehe/book/info'
//     return axios.post(url)
//   }
  list(page=1,pageSize=2){
    // localhost:3000/goods?page=1&pageSize=5
    let url ='/hehe/book/getinfo'
    return axios.post(url,{page,pageSize})
  }
  del(_id){
    let url ='/hehe/book/del'
    return axios.post(url,_id)
  }
  update(_id,{name,auctor,price,booktype,desc,path}){
    let url =`/hehe/book/update${_id}`
    return axios.post(url,{name,auctor,price,booktype,desc,path})
  }
  add(name,auctor,price,booktype,desc,path){
    let url ='/hehe/book/add'
    // console.log(name,auctor,price,booktype,desc,path)
    return axios.post(url,{name,auctor,price,booktype,desc,path})
  }
  findBookByKey(key){
    let url ='/hehe/book/getinfoKey'
    return axios.post(url,{key})
  }
}

export default new Books()