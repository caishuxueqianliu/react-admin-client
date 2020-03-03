import React, { Component } from 'react'

import {Form,Select,Input} from 'antd'

const Item = Form.Item;
const Option = Select.Option;
/* 添加分类的form组件 */
export default class AddForm extends Component {
     constructor(props){
        super(props);
  
    // static propTypes = {
    //     setForm:PropTypes.func.isRequired,
    //     categorys:PropTypes.array.isRequired,  //一级分类的数组
    //     parentId:PropTypes.string.isRequired,  //父分类的ID
    // }
    // componentWillMount(){
    //     this.props.setForm(this.props.form)
    // }
    this.state={
       categoryName:'',
        categoryNames:''
    }
  }
  
  //    componentWillMount () {
      

  // }


   
    render() {

        const parentId =this.props.parentId

this.props.msgs(this.state.categoryName)
this.props.msgss(this.state.categoryNames)
let params=this.props.categorys.map(c =><Option value={c._id}>{c.name}</Option>)
        return (
           <div>
           
          
                <Item>
                    
                    
                  {
                    /*onChange={value=>{this.setState({categoryNames:value})}}     
                     */
                   } 
                 <Select value={parentId} disabled>
                      <Option value='0' >一级分类</Option>
                                {params}
          

                
                            </Select>
                    
                    
                </Item>
                <Item>
                    
                   
              <Input onChange={e=>this.setState({categoryName:e.target.value})}
               placeholder='请输入分类名称'></Input>
                      
                            
                </Item>
           
            </div> 
        )
    }
}
