
/* 
包含应用中所有请求接口的函数: 接口请求函数
函数的返回值都是promise对象
*/
import jsonp from 'jsonp'  // axios不能发jsonp请求
//import ajax from './ajax'
import { message } from 'antd';
import axios from 'axios'
// const BASE = 'http://localhost:5000'

const BASE = ''


// 登录
//export const reqLogin = (username,password)=> ajax(BASE+'/login',{username,password},'POST');

// 获取一级/二级分类的列表 
export const reqCategorys = (parentId) =>axios.get(BASE + '/manage/category/list',{params:{parentId}});

export const reqCategoryInfo = (categoryId)=>axios.get(BASE+'/manage/category/info',{params:{categoryId}});

// 添加分类
export const reqAddCategorys = (parentId,categoryName) =>axios.post(BASE + '/manage/category/add',{categoryName,parentId});

// 更新分类
export const reqUpdateCategory = (categoryId,categoryName) =>axios.post(BASE + '/manage/category/update',{categoryId,categoryName});

// 获取商品分页列表
export const reqProducts = (pageNum,pageSize)=>axios.get(BASE+'/product/list',{params:{pageNum,pageSize}});

// // 搜索商品分页列表(根据商品名称/商品描述)
// // searchType:搜索的类型,productName/productDesc
//变量值作为属性名
export const reqSearchProducts = ({pageNum,pageSize,searchName,searchType})=>axios.get(BASE+'/product/search',{params:{
    pageNum,
    pageSize,
    [searchType]:searchName
  }
});

// // 更新商品状态(上架/下架)
export const reqUpdateStatus = (productId,status) => axios.post(BASE+'/product/updateStatus',{productId,status});

// // 删除图片
// export const reqDeleteImg = (name) => ajax(BASE+'/manage/img/delete',{name},'POST');

// 添加/删除商品
export const reqAddOrUpdateProduct = (product)=>axios.post(BASE+'/product/'+(product._id?'update':'add'),product);

// // 获取所有角色的列表
// export const reqRoles = ()=>ajax(BASE+'/manage/role/list');

// // 添加角色
// export const reqAddRole = (name)=>ajax(BASE+'/manage/role/add',{name},'POST');

// // 更新角色
// export const reqUpdateRole = (role)=>ajax(BASE+'/manage/role/update',role,'POST');

// // 获取所有用户的列表
// export const reqUsers = (_id)=>ajax(BASE+'/manage/user/list',{_id});

// // 删除用户
// export const reqDeleteUser = (_id)=>ajax(BASE+'/manage/user/delete',{_id},"POST");

// // 添加/更新用户
// export const reqAddOrUpdateUser = (user)=> ajax(BASE+'/manage/user/'+(user._id?'update':'add'),user,'POST');

// 更新用户
// export const reqUpdateUser = (user)=> ajax(BASE+'/manage/user/update',user,'POST');



export const reqWeather = (city,callback) => {

  // 执行器函数: 内部去执行异步任务, 
  // 成功了调用resolve(), 失败了不调用reject(), 直接提示错误
  return new Promise((resolve, reject) => { 
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=859d16285fd000feec89e9032513f8bb`
    jsonp(url, {}, (error, data) => {
      if (!error && data.error===0) { // 成功的
        const {dayPictureUrl, temperature} = data.results[0].weather_data[0]
        resolve({dayPictureUrl, temperature})
      } else { // 失败的
        message.error('获取天气信息失败')
      }

    })
  })

    // const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=859d16285fd000feec89e9032513f8bb`
    // jsonp(url, {}, (error, data) => {
    //   if (!error && data.error===0) { // 成功的
    //     const {dayPictureUrl, weather} = data.results[0].weather_data[0]
    //    // callback(weather)
    //    //callback(dayPictureUrl)
    //    callback({dayPictureUrl, weather})
    //    //callback(1112)
    //   } else { // 失败的
    //     message.error('获取天气信息失败')
    //   }

    // })
   
}