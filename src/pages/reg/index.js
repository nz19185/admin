import React, { Component } from 'react';
import api from '../../api/admin'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './index.module.less'
class Reg extends Component {
  onFinish=async (e)=>{
   console.log('完成',e)
  //  获取用户填写的数据 发起ajax请求 
  let {us,ps} = e 
  // console.log(us,ps)
  let result = await api.reg(us,ps)
 
  // console.log(result.code)
  if(result.code === 0 ){
    // console.log(us,ps)
    message.success('注册成功',1,()=>{
      this.props.history.replace('/login')
    })
  }else if(result.code === -1){
    message.error('用户名已存在')
  }else{
    message.error('注册失败，请重试')
  }
}
  render() { 
    return ( 
    <div className={style['reg-box']}>
       <Form
        name="normal_reg"
        className={style['reg-form']}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        {/* 用户名 */}
      <Form.Item
        name="us"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {max:9,message:"用户名最长9位"},
          {min:3,message:"用户名最少3位"}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 密码 */}
      <Form.Item
        name="ps"
        rules={[
          {
            required: true,
            message: 'Please input your passWord!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 登录按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          注册
        </Button>
      </Form.Item>
    </Form>
</div>
     );
  }
}
 
export default Reg;