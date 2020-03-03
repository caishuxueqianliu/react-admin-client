import React from 'react'

import {withRouter} from 'react-router-dom'
import { message,Modal} from 'antd';
import './index.less'
import LinkButton from '../link-button'
import {reqWeather} from '../../api/index.js'
import menuList from '../../config/menuConfig'
 class Header extends React.Component{

state={

currentTime:"",
 dayPictureUrl:'',
	temperature:'',
}
logOut=()=>{

Modal.confirm({

	content:'确定退出吗？',
	onOk:()=>{
		
		 localStorage.clear();
    message.success('退出成功')
   this.props.history.replace('/login')
	


	}
})

	 //  localStorage.clear();
  // //   message.success('退出成功')
  //  this.props.history.replace('/login')
	
}
getTitle=()=>{

 const path=this.props.location.pathname
 let title

 menuList.forEach((item)=>{

       if(item.key===path){
       	title=item.title
    
       }
         else if(item.children) {
         	     item.children.forEach(cItem=>{

         	     	  if(cItem.key===path){
                  	title=cItem.title
                  	
                         }
                     })


               // const cItem=item.children.find(cItem=>
               // 	cItem.key===path
               // )

               // if(cItem){
               // 	 	title=cItem.title
         	     // }
               }
         
 })


return title

}
formateDate=()=>{
  
  let date = new Date()
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
    ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}
getTime=()=>{
this.intervaId=setInterval(()=>{
	const currentTime=this.formateDate(Date.now)
	//const currentTime=new Date().toLocaleString()
	//console.log(currentTime)
	this.setState({currentTime})

},1000)



}
getWeather= async ()=>{
		 // var res=  reqWeather('南京',res=>{
		 // 	console.log(res)
		 //       const {dayPictureUrl, temperature}=res
   //         this.setState({dayPictureUrl, temperature})
		 // })    




//  reqWeather('南京').then((res)=>{

//        const {dayPictureUrl, temperature}=res
// this.setState({dayPictureUrl, temperature})

//  })



const {dayPictureUrl, temperature}= await reqWeather('南京')
//console.log(dayPictureUrl, weather)
this.setState({dayPictureUrl, temperature})
		}

  // componentWillMount () {
          
       
  //     }
      componentDidMount() {
      //第一次render后执行一次   ajax请求和定时器
          this.getWeather()
        this.getTime()
        this.getTitle()
      }
      componentWillUnmount() {    
    clearInterval(this.intervaId)
      }
    render(){
      
const title=this.getTitle()
var nickname=localStorage.getItem('user_key')  
           return (<div className='header'>

           <div className='header-top'>
             <span>欢迎,{nickname}</span>
             <LinkButton onClick={this.logOut}>logout</LinkButton>
           </div>

 
             <div className='header-bottom'>
                 <div className='header-bootom-left'>{title}</div>   
              <div className='header-bootom-right'>
          <span>{this.state.currentTime}</span>
           <img src={this.state.dayPictureUrl} alt="weather"/>
           <span>{this.state.temperature}</span>
              </div>  
             </div>
           </div>)
 }



  

}

export default withRouter(Header) 

