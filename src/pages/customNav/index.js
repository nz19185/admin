import React, { Component } from 'react';
import { Menu } from 'antd';
import {menulist} from './menulist'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;



class user extends Component {
    constructor(props) {
        super(props);
      
        this.state = { 
           
         };
        
    }

    renderItem(menulist){
        return menulist.map((item,index)=>{

        })

    }
   
    render() {
        return (
            <Menu
            mode="inline"
            theme='dark'
            style={{ width: 256 }}
          >
           
          </Menu>
        );
    }
}

export default user;