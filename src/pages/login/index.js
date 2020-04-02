import React, { Component } from 'react';
import api from '../../api/admin'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import style from './index.module.less'
class Login extends Component {
  onFinish=async (e)=>{
  //  console.log('完成',e)
  //  获取用户填写的数据 发起ajax请求 
  let {us,ps} = e 
  let result = await api.login(us,ps)
  // console.log(result)
  
  if(result.code === 0 ){
    // console.log(this)
    message.success('登录成功',1,()=>{
      // console.log(us)
      localStorage.setItem('user',us)
      this.props.history.replace('/admin/adminlist')
    })

  }else{
    message.error('用户名不存在或密码有误，请重试')
  }
  }
  render() { 
    return ( 
    <div className={style['login-box']}>
       <Form
        name="normal_login"
        className={style['login-form']}
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
          {max:9,message:"用户名最长9位"},
          {min:3,message:"用户名最少3位"}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      {/* 记住我 */}
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <span>
          Forgot password
        </span>
      </Form.Item>
      {/* 登录按钮 */}
      <Form.Item>
        <span className={style.kg}></span>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        
      </Form.Item>
      <span className={style.test} >
          ！若未注册，请先注册
      </span>
      <button className={style.reg} 
       onClick={()=>{
        //  console.log(this)
         this.props.history.replace('/reg')
       }}
      >注册</button>
      
    </Form>
</div>
     );
  }
}
 
export default Login;