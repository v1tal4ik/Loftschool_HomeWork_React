import  React,{Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect,Link } from 'react-router-dom';
import Home from '../../components/Home';
import InboxList from '../../components/InboxList';
import OutboxList from '../../components/OutboxList';
import "./AppRouter.css";
// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="wrapper">
                        <div className='container'>
                            <nav className="nav">
                                <ul className="navList">
                                    <li className='navElement'><Link to='/app' >Home</Link></li>
                                    <li className='navElement'><Link to='/app/inbox' >InBox</Link></li>
                                    <li className='navElement'><Link to='/app/outbox' >OutBox</Link></li>
                                </ul>
                            </nav>
                           <div className='content'>
                           <Switch>
                                <Route path='/app' component={Home} exact />
                                <Route path='/app/inbox' component={InboxList} exact />
                                <Route path='/app/outbox' component={OutboxList} exact />
                           </Switch>
                           </div>
                        </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;