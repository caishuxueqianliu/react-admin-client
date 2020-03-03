import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import ProductHome from './home.jsx'
import ProductAddUpdate from './add-update.jsx'
import ProductDetail from './detail.jsx'
import './product.less'

/* 商品路由 */
export default class Product extends Component {
    render() {
        return (
           

    
       	
       <Switch>
 <Route  path='/product'   component={ProductHome}  exact  / >    
<Route  path='/product/addupdata'   component={ProductAddUpdate}    / >  

<Route  path='/product/detail'   component={ProductDetail} /  >  

   <Redirect to="/product"/>
       </Switch>

   


          
        );
    }
}

