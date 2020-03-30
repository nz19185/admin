import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import  './index.model.less'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
  
  const { Header, Sider, Content } = Layout;
class admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapsed:false,
         };
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
             这是侧边栏
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                  <div className='sit-layout-icon'>
                  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                  style:{
                      fontSize:'20px'
                  }

                })}
               
                  </div>
               
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        );
    }
}


export default admin;