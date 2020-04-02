import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Input,message} from 'antd';
import { DownOutlined, UserOutlined, ToolOutlined, LoginOutlined, BellOutlined } from '@ant-design/icons';
import api from '../../api/books'
import {withRouter} from 'react-router-dom'
const { Search } = Input;
const menu = (<Menu style={{}}>
    <Menu.Item >
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            <UserOutlined />
            个人中心
  </a>
    </Menu.Item>
    <Menu.Item>

        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            <ToolOutlined />
            个人设置
  </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>

        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            <LoginOutlined />
            退出登录
  </a>
    </Menu.Item>
</Menu>)

class head extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
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
                            this.props.history.push({pathname:'/admin/searchbook',state:pay})
                          }else{
                            message.error('查无此书')
                          }       
                    }}
                    style={{ width: 200 }}
                /></span>
                <span style={{ marginRight: '20px', marginTop: '30px' }}><BellOutlined style={{ fontSize: '20px' }} /></span>
                <Dropdown overlay={menu} size='large'>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}
                    >
                        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} size='small' />
                        Hover me <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

export default  withRouter(head);