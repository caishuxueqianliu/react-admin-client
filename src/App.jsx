import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login.jsx'

//import { Button,message } from 'antd';
export default class App extends React.Component{

           render(){
                  
              return (<BrowserRouter>
                
     <Switch>
                        <Route path  ="/login" component={Login}/>
                          <Route path="/"  component={Admin}/>
                        
             
     </Switch>

                      </BrowserRouter>
)

              }
 
}