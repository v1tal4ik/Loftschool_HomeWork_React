import React, {Component} from 'react';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Search} exact/>
                    <Route path={'/shows/:id'} component={ShowPage}/>
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;

