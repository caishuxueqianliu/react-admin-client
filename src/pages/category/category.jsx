import React, { Component } from 'react'

import {Card,Button,Table,message,Modal} from 'antd'
import {PlusOutlined,ArrowRightOutlined} from '@ant-design/icons'
import LinkButton from '../../components/link-button'
/**
 * 分类管理 <PlusOutlined />
 */
import AddForm from './add-from.jsx'
import UpdateForm from './add-update-form.jsx'
 import {reqCategorys,reqAddCategorys,reqUpdateCategory} from '../../api/index.js'
export default class Category extends Component {
constructor(props) {
        super(props);
  
this.state={
loading:true,
dataSource:[],
subCategorys:[],
parentId:'0',
parentName:'',
name:[],
values:'',
visible:0,
category:""

}
  }
meth=(ref)=>{
	this.child=ref
}


hideModal=()=>{

	this.setState({visible:0})
}
showAdd=(category)=>{
 this.category=category
this.setState({category})
	this.setState({visible:1})
	//console.log(this.state.name)
	//console.log(this.state.dataSource)
}
showUpdata=(category)=>{
this.category=category
this.setState({category})
//console.log(this.category.name)
	this.setState({visible:2})
}
addCategory=()=>{
   /* 隐藏确认框 */
       
         //this.setState({values:this.msg})
          const parentId = this.state.parentId;
         // const categoryName = this.state.values;
          const categoryName = this.CategoryName;
           //const categoryNames = this.CategoryNames;
           //console.log(parentId ,categoryName,categoryNames)
  reqAddCategorys(parentId,categoryName).then(res=>{
         if(res.data.status === 0){
            if(parentId === this.state.parentId){
              this.getdataSource();
            }else{
              this.getdataSource('0');
            }        
          }


       	  })

    
        
             
                this.setState({
            visible:0
         
         })
        

}

updateCategory=()=>{
 

    
          /* 隐藏确认框 */
       
         //this.setState({values:this.msg})
          const categoryId = this.category._id;
         // const categoryName = this.state.values;
          const categoryName = this.msg;
           //console.log(categoryId,categoryName)


         reqUpdateCategory(categoryId,categoryName).then(res=>{
         if(res.data.status ===0){
          	//this.setState({loading:false})
            this.getdataSource();
            message.success("更新成功")
             //this.child.reset()
          }
             
                this.setState({
            visible:0
          });
         })
        
       
 
}
getSubCategorys=(category)=>{
this.setState({
 parentId:category._id,
parentName:category.name
},()=>{
	this.getdataSource()
	//在状态更新且重新render后执行
})


}
showCategorys=()=>{
this.setState({
 parentId:'0',
parentName:'',
subCategorys:[],
visible:0
})


}
getdataSource=()=>{
         reqCategorys(this.state.parentId).then(res=>{
            //console.log(res)

    if(res.data.status===1){

    	message.error('获取分类列表失败')
    }
 else if(res.data.status===0){
 this.setState({loading:false})

        const dataSource=res.data.data

    // { 
    	// dataSource.forEach(item=>{
    	// 	console.log(item.name)
     //           var nameArr=[]
     //          nameArr= nameArr.push(item.name)
     //           console.log(nameArr)
     //           this.setState({name:nameArr})
     //     })
     dataSource.map(item=>{
     //	console.log(item.name)
              
              this.state.name.push(item.name)
             //  console.log(this.state.name)
              // this.setState({name})
     })
//}

        if(this.state.parentId==='0'){
message.success('获取分类列表成功')

         this.setState({dataSource})
        }
        else{
        	 this.setState({subCategorys:dataSource})
        }
    	
    }
           

         })
     
      // reqUpdateCategory('5c2ed647f352726338607047','玩具').then(res=>{
      //  	console.log(res)
      //  })
}

initColumns=()=>{
	this.columns=[
  {
    title: '分类的名称',
    dataIndex: 'name',
    key: 'name'
    
  },
 
  {
    title: '操作',
    width: 300,
    render:(category)=>(
    	<span>
    		
    		<LinkButton onClick={()=>this.showUpdata(category)}>修改分类</LinkButton>
    	{this.state.parentId==='0'?<LinkButton onClick={()=>this.getSubCategorys(category)}>查看子分类</LinkButton>:null	}
    	</span>
   )  }
];
}
message=(msg)=>{
	//console.log(msg)
this.msg=msg
// this.setState({values:msg})
}
getCategoryName=(msg)=>{
	//console.log(msg)
this.CategoryName=msg

}
getCategoryNames=(msg)=>{
	//console.log(msg)

this.CategoryNames=msg
}
  componentWillMount () {
    	 this.initColumns()

  }

  componentDidMount () {

    this.getdataSource()

  }
  render(){

const title=this.state.parentId==='0'?'一级分类列表':(
<span>
 <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>
<ArrowRightOutlined style={{marginRight :10,color:"#1DA57A",cursor:'pointer'}}/>
<span>{this.state.parentName}</span>
</span>
	 )
const extra=(<Button type='primary' onClick={this.showAdd}>

<PlusOutlined />Add
	</Button>)






    return (

<div>
 <Card title={title} extra={extra} style={{ }}>

 <Table loading={this.state.loading} pagination={{defaultPageSize:5,showQuickJumper:true}} 
 dataSource={this.state.parentId==='0'?this.state.dataSource:this.state.subCategorys} 
 rowKey='_id' columns={this.columns} bordered/>;
  </Card>



<Modal
          title="添加分类"
          visible={this.state.visible===1}
          onOk={this.addCategory}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
         <AddForm categorys={this.state.dataSource} 
         msgs={this.getCategoryName}
         msgss={this.getCategoryNames}
                parentId={this.state.parentId}
         ></AddForm>
        </Modal>



        <Modal
          title="更新分类"
          visible={this.state.visible===2}
          onOk={this.updateCategory}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
       <UpdateForm categoryName={this.state.category.name} msg={this.message}></UpdateForm>
        </Modal></div>
)
    
                    
  }
}

