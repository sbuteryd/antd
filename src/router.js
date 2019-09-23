import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from "./App";
import Login from './pages/login/index'
import Admin from "./Admin"
import Button from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch/index";

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
                                <Route component={NoMatch}/>
                            </Switch>
                         </Admin>
                    }/>
                    <Route path='/order/detail' component={Login} component={Login}/>
                </App>
            </BrowserRouter>
        );
    }
}
