import React, { Component } from 'react';
import { Menu } from 'antd';
import menulist from './menulist.js'
import { HomeOutlined, UserOutlined, BugOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu;


//点击跳转路由方法
function Go(e) {
    console.log("e",e);
    
    console.log(this);
    let { path } = e.item.props
    this.props.history.push(path)


}
class customNav extends Component {
    


    //矢量图方法
    renderIcon(icon) {
        switch (icon) {
            case 'home':
                return <HomeOutlined />
                break;
            case 'user':
                return <UserOutlined />
                break;
            case 'admin':
                return <BugOutlined />
                break;
            default:
                break;
        }
    }
    //动态渲染侧边栏
    renderItem(data) {
        return data.map((item, index) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={(() => {
                        return (
                            <span>
                                {this.renderIcon(item.icon)}
                                {item.title}
                            </span>
                        )
                    })()}
                        style={{ textAlign: 'left' }}
                    >
                        {/* 递归调用 */}
                        {this.renderItem(item.children)}

                    </SubMenu>
                )
            } else {
                return (
                    //一级导航
                    <Menu.Item key={item.key} path={item.path} style={{ textAlign: 'left' }}

                    >
                        {this.renderIcon(item.icon)}
                        {item.title}

                    </Menu.Item>
                )
            }

        })

    }

    render() {
        return (
            <Menu
                mode="inline"
                theme='dark'
                style={{}}
                defaultSelectedKeys={['0']}
                onClick={Go.bind(this)}
               
            >
                {this.renderItem(menulist)}

            </Menu>
        );
    }
}

export default withRouter(customNav);