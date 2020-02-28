import React from 'react'
import  './login.less'
import logo from './images/logo.png'
import { Form,Icon, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

 class Login extends React.Component{

constructor(props){
        super(props);
    }
handleSubmit=(event)=>{
console.log(111)
  }
    render(){
        
 const {getFieldDecorator}=this.props.form
           return (<div className="login">
                  
<header className='login-header'>
 <img src={logo} alt='logo'/>
 <h1>React后台管理系统</h1>

</header>

<section className='login-content'>

          <h2>登陆界面</h2>
       <Form onSubmit={this.handleSubmit}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    >
       <Form.Item>
                            {
                                getFieldDecorator('username',{
                                    rules:[
                                        {required:true,whitespace:true,message:'用户名必须输入！'},
                                        {min:4,message:'用户名必须大于4位'},
                                        {max:12,message:'用户名最多只能12位'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名只能是字母、数字、下划线'}
                                    ],
                                    //initialValue:'admin' //默认显示值
                                })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                    />)
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[
                                        { validator: this.validatePwd}
                                    ]
                                })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                    />)
                            }
                            
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


const WrapLogin=Form.create()(Login)

  export default WrapLogin

  
