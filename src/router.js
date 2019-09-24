import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from "./App";
import Login from './pages/login/index'
import Admin from "./Admin"
import Button from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch/index";
import  Modals from './pages/ui/modals'
import  Message from './pages/ui/message'
import TabsList from './pages/ui/tabs'
import  Gallery from './pages/ui/gallery'
import CarouselList  from './pages/ui/Carousel'
import  FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basic'

export default class IRoute extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Button}/>
                                <Route path='/admin/ui/modals' component={Modals}/>
                                {/*<Route component={NoMatch}/>*/}
                                <Route path='/admin/ui/messages' component={Message}/>
                                <Route path='/admin/ui/tabs' component={TabsList}/>
                                <Route path='/admin/ui/gallery' component={Gallery}/>
                                <Route path='/admin/ui/carousel' component={CarouselList}/>
                                <Route path='/admin/form/login' component={FormLogin}/>
                                <Route path='/admin/form/reg' component={FormRegister}/>
                                <Route path='/admin/table/basic' component={BasicTable}/>

                            </Switch>
                         </Admin>
                    }/>
                </App>
            </BrowserRouter>
        );
    }
}
