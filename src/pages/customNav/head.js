import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Input,message} from 'antd';
import { DownOutlined, UserOutlined, ToolOutlined, LoginOutlined, BellOutlined } from '@ant-design/icons';
import api from '../../api/books'
import {withRouter} from 'react-router-dom'
const { Search } = Input;
const user =localStorage.getItem('user')
// console.log(this);
class head extends Component {
    constructor(props) {
        super(props);
        this.state = {
             user:user
        };
    }

     createMenu=()=>{
        // console.log(this);  
       return (
           (<Menu style={{}}>
               <Menu.Item >
                       <UserOutlined />
                       个人中心
               </Menu.Item>
               <Menu.Item>
                       <ToolOutlined />
                       个人设置
               </Menu.Item>
               <Menu.Divider />
               <Menu.Item onClick={()=>{
                   if(localStorage.getItem('user')){
                       localStorage.removeItem('user')
                       message.success('退出成功1秒后返回登录页面',1,()=>{
                           console.log(this);
                           this.props.history.push('/login')
                       })
                   }else{
                       message.error('您还未登录请先登录')
                   }
                   
                   
               }}>  
                     <LoginOutlined />
                       退出登录
               </Menu.Item>
           </Menu>)
   
       )
   } 
    
    render() {
        let {user} =this.state
        return (
            <div>
                {/* 根据书籍类别查询 */}
                 <span style={{marginRight:'20px'}}>
                    <Search
                    placeholder="请输入您喜欢的书籍类别"
                    onSearch={async (value)=>{
                          let result =await api.findBookByType(value)
                          console.log(result)
                          const pay =result.list
                          if(result.list!=''){
                            message.success('查询成功')
                            localStorage.setItem('hehe',JSON.stringify(pay))
                            this.props.history.push({pathname:'/admin/searchbook',state:pay})
                          }else{
                            message.error('查无此书')
                          }       
                    }}
                    style={{ width: 200 }}
                /></span>
                {/* 根据书籍关键字查询 */}
                <span style={{marginRight:'20px'}}>
                    <Search
                    placeholder="请输入您要查询的书籍"
                    onSearch={async (value)=>{
                          let result =await api.findBookByKey(value)
                          console.log(result)
                          const pay =result.list
                          if(result.list!=''){
                            message.success('查询成功')
                            localStorage.setItem('hehe',JSON.stringify(pay))
                            this.props.history.push({pathname:'/admin/searchbook',state:pay})
                          }else{
                            message.error('查无此书')
                          }       
                    }}
                    style={{ width: 200 }}
                /></span>
                <span style={{ marginRight: '20px', marginTop: '30px' }}><BellOutlined style={{ fontSize: '20px' }} /></span>
                <Dropdown overlay={this.createMenu} size='large'>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}
                    >
                        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} size='small' />
                        {user}欢迎您 <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

export default  withRouter(head);