import React, { Component } from 'react'
// import {
//   Card,
//   Icon,
//   Form,
//   Input,
//   Select,
//   Button,
//   message
// } from 'antd'

// import { reqCategorys, reqAddUpdateProduct } from '../../api'
// import PicturesWall from './pictures-wall'
// import LinkButton from '../../components/link-button'
// import memoryUtils from '../../utils/memoryUtils'
// import RichTextEditor from './rich-text-editor'

// const Item = Form.Item
// const Option = Select.Option

/*
商品添加/更新的路由组件
*/
export default class ProductAddUpdate extends Component {

 //  state = {
 //    categorys: []
 //  }

 //  constructor(props) {
 //    super(props);
 //    // 创建ref容器, 并保存到组件对象
 //    this.pwRef = React.createRef()
 //    this.editorRef = React.createRef()
 //  }

 //  getCategorys = async () => {
 //    const result = await reqCategorys()
 //    if (result.status === 0) {
 //      const categorys = result.data
 //      this.setState({ categorys })
 //    }
 //  }

 //  /* 
 //  对价格进行自定义验证
 //  */
 // validatePrice = (rule, value, callback) => {
 //    if (value==='') {
 //      callback()
 //    } else if (value * 1 <=0) {
 //      callback('价格必须大于0')
 //    } else {
 //      callback()
 //    }
 // }

 // /* 
 //  处理提交的回调
 // */
 // handleSubmit = (event) => {
 //   // 阻止事件的默认行为(提交表单)
 //   event.preventDefault()

 //   // 进行统一的表单验证
 //   this.props.form.validateFields(async (err, values) => {
 //      if (!err) {
 //        const {name, desc, price, categoryId} = values
 //        console.log('发送请求', name, desc, price, categoryId)

 //        // 收集上传的图片文件名的数组
 //        const imgs = this.pwRef.current.getImgs()
 //        console.log('imgs', imgs)
 //        // 输入的商品详情的标签字符串
 //        const detail = this.editorRef.current.getDetail()
 //        console.log('detail', detail)

 //        // 封装product对象
 //        const product = {name, desc, price, categoryId, imgs, detail}
 //        if (this.isUpdate) {
 //          product._id = this.product._id
 //        }

 //        // 发请求添加或修改
 //        const result = await reqAddUpdateProduct(product)
 //        if (result.status===0) {
 //          message.success(`${this.isUpdate ? '修改' : '添加'}商品成功`)
 //          this.props.history.replace('/product')
 //        } else {
 //          message.error(result.msg)
 //        }
 //      } 
 //    })
 // }

 // componentWillMount () {
 //   this.product = memoryUtils.product
 //   this.isUpdate = !!this.product._id
 // }

 //  componentDidMount() {
 //    this.getCategorys()
 //  }

  render() {
    // const { categorys } = this.state
    // const {isUpdate, product} = this

    // const { getFieldDecorator } = this.props.form
   
    // const title = (
    //   <span>
    //     <LinkButton onClick={() => this.props.history.goBack()}>
    //       <Icon type="arrow-left" />
    //     </LinkButton>
    //     <span>{isUpdate ? '修改商品' : '添加商品'}</span>
    //   </span>
    // )

    // // 指定form中所有item的布局
    // const formLayout = {
    //   labelCol: { span: 2 },
    //   wrapperCol: { span: 8 }
    // }

    return (

      <div>add</div>
     )



}
}