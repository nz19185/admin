import axios from '../untils/axio'
class Books {
  findOne(_id){
    let url ='/hehe/book/getinfoId'
    return axios.post(url,{_id})
  }
//   bookList(page,pageSize){
//     // localhost:3000/goods?page=1&pageSize=5
//     let url ='/hehe/book/info'
//     return axios.post(url)
//   }
//分页查询
  list(page=1,pageSize=2){
    // localhost:3000/goods?page=1&pageSize=5
    let url ='/hehe/book/getinfo'
    return axios.post(url,{page,pageSize})
  }
  //删除书籍
  del(_id){
    let url ='/hehe/book/del'
    return axios.post(url,_id)
  }
  update(_id,name,auctor,price,booktype,desc,path){
    let url ='/hehe/book/update'
    return axios.post(url,{_id,name,auctor,price,booktype,desc,path})
  }
  //增加书籍
  add(name,auctor,price,booktype,desc,path){
    let url ='/hehe/book/add'
    // console.log(name,auctor,price,booktype,desc,path)
    return axios.post(url,{name,auctor,price,booktype,desc,path})
  }
  //根据关键字查询
  findBookByKey(key){
    let url ='/hehe/book/getinfoKey'
    return axios.post(url,{key})
  }
  //根据类别查询
  findBookByType(booktype){
    let url='/hehe/book/getinfoByType'
    return axios.post(url,{booktype})

  }
}

export default new Books()