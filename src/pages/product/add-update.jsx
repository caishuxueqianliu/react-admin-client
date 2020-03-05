import React, { Component } from 'react'
import {
  Card,
  Upload,
Cascader,
  Form,
  Input,
  Select,
  Button,
  message,
  

} from 'antd'
import {ArrowLeftOutlined,LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import { reqCategorys, reqAddUpdateProduct } from '../../api'
// import PicturesWall from './pictures-wall'
// import LinkButton from '../../components/link-button'
// import memoryUtils from '../../utils/memoryUtils'
// import RichTextEditor from './rich-text-editor'

const Item = Form.Item
const Option = Select.Option
const { TextArea } = Input;
/*
商品添加/更新的路由组件
*/
export default class ProductAddUpdate extends Component {

  state = {
        options:[],
    };
 initOptions = async (categorys)=>{
        //根据categorys生成options数组
        const options = categorys.map(c =>({
            value: c._id,
            label: c.name,
            isLeaf: false,  //不是叶子
        }));
        // 如果是一个二级分类商品的更新
        // const {isUpdate,product} = this;
        // const {pCategoryId,categoryId} = product;
        // if(isUpdate && pCategoryId !== '0'){
        //     // 获取对应的二级分类表表
        //    const subCategorys = await this.getCategorys(pCategoryId);
        //     // 生成二级下拉列表的options
        //    const childOptions = subCategorys.map(c=>({
        //         value: c._id,
        //         label: c.name,
        //         isLeaf: true,
        //     }));

        //     // 找到当前商品对应的一级option对象
        //     const targetOption = options.find(option=>option.value === pCategoryId);

        //     // 关联对应的一级option上
        //     targetOption.children = childOptions;
        // }
        this.setState({
            options
        });
    }
    //异步获取一级/二级分类表并显示
    getCategorys = async (parentId)=>{
        const result = await reqCategorys(parentId);
       
        if(result.data.status === 0){
            const categorys = result.data.data;

            if(parentId === '0'){  //一级列表
                this.initOptions(categorys);
            }else{  //二级列表
                return categorys   //返回二级列表,  当前async函数返回的promise就会成功且value为categorys
            }
            this.initOptions(categorys);
             console.log(categorys)
        }
    }
//用于加载下一级列表的回调函数
    loadData = async selectedOptions => {
        //得到选择的option对象
        const targetOption = selectedOptions[selectedOptions.length - 1];
        //显示loading
        targetOption.loading = true;
    
        //根据选中的分类,请求获取二级分类列表
        const subCategorys = await this.getCategorys(targetOption.value);
        targetOption.loading = false;
        if(subCategorys && subCategorys.length > 0){
            //生成当前一个二级列表的options
            const childOptions = subCategorys.map(c =>({
                value: c._id,
                label: c.name,
                isLeaf: true,
            }));
            //关联到当前option上
            targetOption.children = childOptions;
        }else{
            targetOption.isLeaf = true;
        }
        
        this.setState({
        options: [...this.state.options],
        });
      };


  componentDidMount() {
    this.getCategorys('0')
console.log(this.props.location.state)
 }

  render() {

    
       const onFinish = values => {

    console.log('Success:', values);

  };      
       const title=(
           <span>
             
<ArrowLeftOutlined onClick={()=>this.props.history.goBack()} style={{color:"#1DA57A",cursor:'pointer'}}/>
       <span style={{marginLeft:10}}>添加商品</span>
           </span>

               )
const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
   const formItemLayout = {
            labelCol: {span:2},
            wrapperCol: {span:8},
        };
    return (

    <Card title={title} className='product-detail'>
                <Form {...formItemLayout} onFinish={onFinish}>
                 <Item
        label="商品名称"
        name="name"
        rules={[{ required: true, message: 'Please input content!' }]}
      >
       
                <Input placeholder='商品名称'/>
                                           
                    </Item>
            <Item
       label='商品描述'
        name="desc"
        rules={[{ required: true, message: 'Please input content!' }]}
      >
       
               <TextArea placeholder="请输入商品描述" autoSize={{ minRows: 4, maxRows: 8}} />
                                           
              </Item>
                
                 <Item
        label="商品价格"
        name="price"
        rules={[{ required: true, message: 'Please input content!' }]}
      >
       
               <Input type='number' placeholder='商品价格' addonAfter='元'/>
                                           
                    </Item>                  
                        
                    
                     <Item
        label="商品分类"
        name="categoryId"
        
      >
       
               <Cascader
                   options={this.state.options}   //需要显示的列表数据数组
                                loadData={this.loadData}  //当选择某个列表项,加载下一级列表的监听回调
                            />
                                           
                    </Item>         

                
                    <Item label='商品图片'>
                        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
       // beforeUpload={beforeUpload}
      //  onChange={this.handleChange}
      >
      {uploadButton}
      </Upload>
                    </Item>
                    <Item label='商品详情' labelCol={{span:2}} wrapperCol={{span:20}}>
                        
                    </Item>
                    <Item>
                        <Button type='primary'htmlType="submit" >提交</Button>
                    </Item>
                </Form>
            </Card>
     )



}
}