import axios from '../untils/axio'
class Book{
    //通过关键字查询书籍
findBookByKey(key){
    let url ='/hehe/book/getinfoKey'
    return axios.post(url,{key})
}

}

export default new Book()
