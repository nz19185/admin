import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import CustomNav from '../customNav/index.js'
import  './index.model.less'
import Head from '../customNav/head.js'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
   
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
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}
            style={{height:'100vh'}}
            >
              <div className="logo" />
                <CustomNav></CustomNav>
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
                  <div className='sit-layout-sel'>
                  <Head></Head>
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
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        );
    }
}


export default admin;