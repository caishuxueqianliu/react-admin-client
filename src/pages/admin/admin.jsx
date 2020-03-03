import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

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

    render(){
           var nickname=localStorage.getItem('user_key')
           if (!nickname) {
      // this.props.history.replace('/login') // 事件回调函数中进行路由跳转
      return <Redirect to="/login"/> // 自动跳转到指定的路由路径
    }
           return    (
            <Layout style={{height : '100%'}}>
      <Sider><LeftNav></LeftNav></Sider>
      <Layout>
        <Header ><div>{nickname} </div></Header>
       <Content style={{ background: 'white', margin: '20px'}}>

      <Switch>
              <Route path="/home" component={Home}/>
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/role' component={Role} />
              <Route path='/user' component={User} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/line' component={Line} />
              <Route path='/charts/pie' component={Pie} />
              <Redirect to="/home"/>
            </Switch>



        
           
          </Content>
        <Footer style={{textAlign : 'center'}}>React后台管理</Footer>
      </Layout>
    </Layout>
  )

}



}