import React, { Component } from 'react'
import {
  Card,
  Select,
  Input,
  Button,
  List,
  message
} from 'antd'
import {PlusOutlined,ArrowLeftOutlined} from '@ant-design/icons'
const Item=List.Item
const BASE_IMG="http://localhost:5000/public/upload/"
// import memoryUtils from '../../utils/memoryUtils'
// import { BASE_IMG } from '../../utils/Constants'
// import {reqCategory, reqProduct} from '../../api'

// const Item = List.Item

/* 
商品详情路由组件
*/
export default class ProductDetail extends Component {


  render() {
         const title=(
           <span>
           	 
<ArrowLeftOutlined onClick={()=>this.props.history.goBack()} style={{color:"#1DA57A",cursor:'pointer'}}/>
       <span style={{marginLeft:10}}>商品详情</span>
           </span>

         	   )
//const {name,desc,price,detail,imgs}=this.props.location.state.product
 const {name,desc,price,imgs,detail} = this.props.location.state.product

//   const images= imgs.map(img=>(

//       <img  className="product-img" key={img} src={BASE_IMG+img} alt="img"/>
// ))

	imgs.forEach(img=>this.images=(

   <img  key={img} className="product-img" src={BASE_IMG+img} alt="img"/>

))
    return (
       <div> 
        <Card title={title} className="product-detail" >
         	
 <List>
 {
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      // bordered
      // dataSource={data}
      // renderItem={item => (
      //   <List.Item>
      //     <Typography.Text mark>[ITEM]</Typography.Text> {item}
      //   </List.Item>
      // )
  }
<Item className="item">
<span className="left">商品名称</span>
<span>{name}</span>
 </Item>   

   <Item className="item">
<span className="left">商品描述</span>
{desc}
 </Item>  


    <Item className="item">
<span className="left">商品价格</span>
{price}
 </Item> 

     <Item className="item">
<span className="left">所属分类</span>
电脑-笔记本
 </Item> 

     <Item className="item">
<span className="left">商品图片</span>
<span>

{
// 	imgs.forEach(img=>(

//    <img  key={img} className="product-img" src={BASE_IMG+img} alt="img"/>

// ))
// {images}
this.images
}
</span>

 </Item> 

     <Item className="item">
<span className="left">商品详情</span>
<span dangerouslySetInnerHTML={{__html:'<h1 style="color:red">联想sagagags</h1>'}}></span>
 </Item> 
 </List>

         </Card>
       </div>
    )
  }
}
