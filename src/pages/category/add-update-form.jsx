import React, { Component } from 'react'

import {Form,Select,Input} from 'antd'

const Item = Form.Item;
const Option = Select.Option;
/* 添加分类的form组件 */
export default class UpdateForm extends Component {
     constructor(props){
        super(props);
          //this.props.meth(this)
   
    // static propTypes = {
    //     setForm:PropTypes.func.isRequired,
    //     categorys:PropTypes.array.isRequired,  //一级分类的数组
    //     parentId:PropTypes.string.isRequired,  //父分类的ID
    // }
    // componentWillMount(){
    //     this.props.setForm(this.props.form)
    // }
    this.state={
        value:""
    }
 }
    getsz=()=>{
        //console.log(this.props.categoryName.name)
        

    }
     componentWillMount () {
        // this.getsz()

  }
reset=()=>{
  this.form.resetFields();

}

names=(e)=>{
if(e && e.target && e.target.value){
      let value = e.target.value;
      //console.log(value)
      this.setState(()=>({value:value }))
    }
         
}
    componentDidMount() {
     
    }
    render() {
       
 const onFinish = values => {
   // console.log('Received values of form: ', values);
 
           
        
 }
const name=this.props.categoryName
this.props.msg(this.state.value)
       

        return (
           <div>
            <Form onFinish={onFinish}>
          
               
                <Item>
                   
              <Input onChange={e=>this.names(e)} defaultValue={name} ></Input>               
                </Item>
            </Form>
            </div> 
        );
    }
}
