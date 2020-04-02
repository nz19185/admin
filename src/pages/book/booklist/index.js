import React, { Component } from 'react';
import {Pagination,Card,message,Table,Tag,Button,Popconfirm} from 'antd'
import booksApi from '../../../api/books'
import style from './index.module.less'
let rootPath = 'http://101.200.230.157:3000'
class booklist extends Component {
    state = { 
        page:1,//页码数
        pageSize:2,//每页显示的条数
        list:[], //列表数据
        allcount:0, //总数量
        columns:[
          {title: '_id',dataIndex: '_id',key: '_id',width:120,fixed:'left'},
          {title: '名称',dataIndex: 'name',key: 'name',width:120},
          {title: '作者',dataIndex: 'auctor',key: 'auctor',width:80},
          {title: '价格',dataIndex: 'price',key: 'price',width:120},
          {title: '描述',dataIndex: 'desc',key: 'desc',width:200},
          {title: '书籍类别',dataIndex: 'booktype',key: 'booktype',width:80},
          {title: '操作',key: 'action',width:120,fixed:'right',render:(recode)=>{
            // console.log(recode)
            return(
                
              <div>
                <Popconfirm title='你确定要删除该书籍嘛?'
                onConfirm={()=>{this.delGodds(recode._id)}}
                >
                  <Button type='danger' size='small'>删除</Button>
                </Popconfirm>
                <Button type='primary' size='small' onClick={()=>{
                  // let result  = booksApi.findOne(recode._id)
                  // console.log(result)
                  // 跳转到修改页面 传递要修改的id 
                  console.log(this)
                  this.props.history.push({pathname:'/admin/bookUpdate/',state:recode._id})
                }}>修改</Button>
              </div>
            )
          }}
      ]
       }
       componentDidMount(){
         this.getListData()
       }
      // 删除商品
      delGodds= async (_id)=>{
        //   console.log(_id)
        let {code,msg} = await booksApi.del({_id})
        // console.log(code,msg)
        if(code){ return message.error(msg)}
        this.getListData()
      }
      // 获取商品数据
      getListData= async ()=>{
        //   console.log(this.state)
        let {page,pageSize}  = this.state
        // console.log(page,pageSize)
        // let result = await booksApi.list(page,pageSize)
        // console.log(result)
        let {code,msg,list,allcount} = await booksApi.list(page,pageSize)
        // console.log(page,pageSize)
        // console.log(code,msg,list,allcount)
        if(code !==0){ return message.error(msg)}
        this.setState({list,allcount})
      }
      render() { 
        let {list,columns,allcount,pageSize,page} = this.state
        return ( 
          <div className={style.box}>
    
            <Card title='商品列表' className={style.card}>
               <Button type='primary' onClick={()=>{
                //  console.log(this)
                 this.props.history.push('/admin/bookadd')
               }}>商品添加</Button>
                {/* 表格内容 */}
                <Table 
                  scroll={ {y:300,x:840} }
                  pagination={false}
                  columns={columns} 
                  dataSource={list} 
                  rowKey='_id'>
                </Table>
                {/* 分页器 */}
                <Pagination  current={page} total={allcount} showQuickJumper pageSize={pageSize}
                onChange={(page)=>{
                  //只要页码数发生改变就会触发          
                  this.setState({page},()=>{
                    this.getListData()
                  })   
                }}
                />
            </Card>
          </div>
         );
      }
    }

export default booklist;