import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Input} from 'antd';
import { DownOutlined, UserOutlined, ToolOutlined, LoginOutlined, BellOutlined } from '@ant-design/icons';
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
                <span style={{marginRight:'20px'}}>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
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

export default head;