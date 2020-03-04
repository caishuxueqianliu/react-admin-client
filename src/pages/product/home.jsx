import React, { Component } from 'react'
import {
  Card,
  Select,
  Input,
  Button,
  Table,
  message
} from 'antd'
import {PlusOutlined,ArrowRightOutlined} from '@ant-design/icons'
import LinkButton from '../../components/link-button'
// import throttle from 'lodash.throttle'

import { reqProducts, reqSearchProducts, reqUpdateStatus } from '../../api'
// import LinkButton from '../../components/link-button'
// import { PAGE_SIZE } from '../../utils/Constants'
// import memoryUtils from '../../utils/memoryUtils';
const PAGE_SIZE=2
 const Option = Select.Option
/* 
商品管理的首页组件
*/
export default class ProductHome extends Component {

constructor(props) {
    super(props)
}
state={
  products:[],
  loading:true,
  total:0,
  searchName:'',
  searchType:'productName'



}
 getProducts=(pageNum)=>{
const {searchName,searchType}=this.state
const pageSize=PAGE_SIZE;
if(searchName){
reqSearchProducts ({pageNum,pageSize,searchName,searchType}).then((res)=>{
     if(res.data.status===0){
        const list=res.data.data.list
        const total=res.data.data.total

         this.setState({products:list})
          this.setState({loading:false,total})
        message.success('获取商品列表成功')
      }
 else {
    message.error('获取商品列表失败')
 }
   

}).catch(err=>{
 message.error('获取商品列表失败')
})
}
  else {
    
 
  
  reqProducts(pageNum,pageSize).then(res=>{

      if(res.data.status===0){
        const list=res.data.data.list
        const total=res.data.data.total

         this.setState({products:list})
          this.setState({loading:false,total})
        message.success('获取商品列表成功')
      }
 else {
    message.error('获取商品列表失败')
 }
  }).catch(err=>{
     message.error('获取商品列表失败')
  })
   }
 }
  initColumns=()=>{
  this.columns=[
  {
    title: '商品名称',
    dataIndex: 'name',
  },
   {
    title: '商品描述',
    dataIndex: 'desc',
    
  },
    {
    title: '价格',
    dataIndex: 'price',
    render:(price)=>'￥'+price
  },
   {
    width:100,
    title: '状态',
    dataIndex: 'status',
    render:(status)=>{
      return(
 <span>
   <Button type='primary'>下架</Button>
   <span>在售</span>
 </span>

         )
    }
  },
  {
    width:100,
    title: '操作',
   
    render:(product)=>(
      <span>
        
        <LinkButton onClick={()=>this.props.history.push('/product/detail',{product})}>详情</LinkButton>
        <LinkButton onClick={()=> this.props.history.push('/product/addupate',product)}>修改</LinkButton>
      </span>
   )  }
];
}
    componentWillMount () {
       this.initColumns()


  }
    componentDidMount () {
       this.getProducts()

  }
  render() {


    const {searchName,searchType}=this.state
const title=(
      <span>
         <Select value={searchType} style={{width :150}} onChange={value=>{this.setState({searchType:value})}}>
           
          <Option value='productName'>按名称搜索</Option>
           <Option value='productDesc'>按描述搜索</Option>
         </Select>

<Input placeholder="关键字" style={{width :150,margin:'0 15px'}} 
onChange={event=>{this.setState({searchName:event.target.value})}} value={searchName}></Input>
<Button type='primary' onClick={()=>this.getProducts(1)}>搜索</Button>


      </span>


  )

const extra=(

        <Button type='primary'>
        <PlusOutlined/>
          添加商品
        </Button>


  )
    return (
     <div>
     <Card title={title} extra={extra} style={{ }}>
        
 <Table loading={this.state.loading} 
 pagination={{onChange:(pageNum)=>{this.getProducts(pageNum)},total:this.state.total,defaultPageSize:PAGE_SIZE,showQuickJumper:true}} 
 dataSource={this.state.products} 
 rowKey='_id' columns={this.columns} bordered/>
   





     </Card>
     </div>
    )
  }
}
