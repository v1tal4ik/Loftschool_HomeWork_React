import React,{Component} from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Login from '../Login/Login';
import Search from '../Search/Search';
// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Route path='/search' component={Search} exact />
                    <Redirect to='/' />
                </Switch>            
            </BrowserRouter>
        )
    }
}


export default Router;