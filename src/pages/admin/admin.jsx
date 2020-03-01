import React from 'react'
import { BrowserRouter,Redirect, Switch, Route } from 'react-router-dom'
import { Button,message } from 'antd';
import { Layout } from 'antd';

import LeftNav from '../../components/sider'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
const {  Footer, Sider, Content } = Layout;

export default class Admin extends React.Component{
logOut=()=>{
   localStorage.clear();
    message.success('退出成功')
   this.props.history.replace('/login')
}
    render(){
           var nickname=localStorage.getItem('user_key')
           if (!nickname) {
      // this.props.history.replace('/login') // 事件回调函数中进行路由跳转
      return <Redirect to="/login"/> // 自动跳转到指定的路由路径
    }
           return    (<BrowserRouter>
            <Layout style={{height : '100%'}}>
      <Sider><LeftNav></LeftNav></Sider>
      <Layout>
        <Header ><div>{nickname}  <Button type='primary' onClick={this.logOut}>logout</Button></div></Header>
       <Content style={{ background: 'white', margin: '20px'}}>

      <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path='/category' component={Category} />
              <Route exact path='/product' component={Product} />
              <Route exact path='/role' component={Role} />
              <Route exact path='/user' component={User} />
              <Route exact path='/charts/bar' component={Bar} />
              <Route exact path='/charts/line' component={Line} />
              <Route exact path='/charts/pie' component={Pie} />
              <Redirect to="/home"/>
            </Switch>



        
           
          </Content>
        <Footer style={{textAlign : 'center'}}>React后台管理</Footer>
      </Layout>
    </Layout>
</BrowserRouter>    )

}



}