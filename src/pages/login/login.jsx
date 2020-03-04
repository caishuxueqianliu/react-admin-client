import React from 'react'
import  './login.less'
import logo from './images/logo.png'
import {Redirect} from 'react-router-dom'
import { Form,Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import {reqLogin} from "../../api/index.js"
 export default class Login extends React.Component{



    render(){
       var nickname=localStorage.getItem('user_key')  

if (nickname) {
       //this.props.history.replace('/admin') // 事件回调函数中进行路由跳转
     return <Redirect to="/"/> // 自动跳转到指定的路由路径
    }
  const onFinish = values => {
    //console.log('Received values of form: ', values);
 
             reqLogin(values).then( (res)=>{
            //  console.log(res.data.status)
                  if(res.data.status===0){
                    var nickname= res.data.data.username
                  localStorage.setItem('user_key', nickname)
                    message.success('登陆成功')
                    this.props.history.replace('/admin')
                  }
                      else if(res.data.status===1){
                  message.error(res.data.msg)

                      }
            })
        
 }

const onFinishFailed=( values, errorFields, outOfDate)=>{

  console.log(values, errorFields, outOfDate)
}
// const validatePwd=(rule, value,callback) => {

//          if (!value ) {
//             callback('Please input your Username!!')
//               }
//               else if (value.length<4){

//  callback('密码至少4位')
//               }
              
//      else if(value.length>10){
//         callback('密码至多10位')
//      }
//      else  if(!/^[a-zA-Z0-9_]+$/.test(value)){
//         callback('只支持字母数字下划线')
//      }
//      else {
//        callback()
//      }


//    }




           return (<div className="login">
                  
<header className='login-header'>
 <img src={logo} alt='logo'/>
 <h1>React后台管理系统</h1>

</header>

<section className='login-content'>

          <h2>登陆界面</h2>
   <Form 


      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
onFinishFailed={onFinishFailed}    >
      <Form.Item
        name="username"
        rules={[
        { required: true, whitespace:true, message: 'Please input your Username!' },
        { min: 4, message: '用户名至少4位' },
        { max:10, message: '用户名最多8位' },
        { pattern: /^[a-zA-Z0-9_]+$/, message: '只支持字母数字下划线' }
        ]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
    
          { required: true, whitespace:true, message: 'Please input your password!' },
          { pattern: /^[a-zA-Z0-9]+$/, message: '只支持字母数字' },
           { min: 4, message: '密码至少4位' },
        { max:10, message: '密码最多8位' },
        ]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
       
      </Form.Item>
    </Form>
</section>
                 </div>
)

}

  

}