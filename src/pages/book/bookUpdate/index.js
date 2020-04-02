import React, { Component } from 'react';
import style from  './index.module.less'
import booksApi from '../../../api/books'
import {Card, message} from 'antd';
class bookupdate extends Component {
    state = {
        "name":"默认名字",
        "auctor":'hehehe',
        "price":0,   
        "booktype":"玄幻",
        "desc":'超好吃,是真的超好吃不是假的超好吃',
        "path":"http://www.baidu.com",
           
      }
       async componentDidMount(){
        console.log(this)
        // // 获取 id
        let  id  = this.props.location.state
        console.log(id)
        // // 获取的类别列表信息
        // let result = await goodsApi.kindlist()
        // // 通过 id  获取修改信息
        let result = await booksApi.findOne(id)
        console.log(result)
       
        // this.setState(...info[0] )
        
      }
      // 修改商品
      submit=async()=>{
        //   console.log(this.state)
        let {name,auctor,price,booktype,desc,path} = this.state
       let {code,msg}  = await booksApi.update(name,auctor,price,booktype,desc,path)
    //    console.log(code,msg)
       if(code){ return message.error(msg)}
    //    console.log(this)
       this.props.history.replace('/admin/booklist')
    
      }
      
      render() { 
        let {name,desc,path,price,auctor,booktype} = this.state
        return ( 
          <div className={style.box}>
             <Card title='书籍添加'>
                名称: <input type='text' value={name} onChange={(e)=>{
                  this.setState({name:e.target.value})
                }}/><br/>
                描述: <input type='text' value={desc} onChange={(e)=>{
                  this.setState({desc:e.target.value})
                }}/><br/>
                链接: <input type='text' value={path} onChange={(e)=>{
                  this.setState({path:e.target.value})
                }}/><br/>
                作者: <input type='text' value={auctor} onChange={(e)=>{
                  this.setState({auctor:e.target.value})
                }}/><br/>
               
                价格: <input type='number' value={price} onChange={(e)=>{
                  this.setState({price:e.target.value})
                }}/><br/>
                {/* 渲染类别 */}
                类别:
                <input type='text' value={booktype} onChange={(e)=>{
                  this.setState({booktype:e.target.value})
                }}/><br/>
                {/* <select value={kind} onChange={(e)=>{
                    this.setState({kind:e.target.value})
                }}>
                  {types.map((item,index)=>{
                    return( <option value={item._id} key={item._id}>{item.kindName}</option>)
                  })}
                </select> */}
               
                <button onClick={this.submit}>修改</button>
             </Card>
          </div>
         );
      }
}

export default bookupdate;