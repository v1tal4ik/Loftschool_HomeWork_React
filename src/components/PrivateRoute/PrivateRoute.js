import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  render(){
    const {isAuthorized} =this.props;
    const {component: RouteCmponent,...rest} = this.props;
    return (
      <Route 
          {...rest}
          render ={props =>
            isAuthorized ? <RouteCmponent {...props} />: <Redirect to="/"/>
          }
      />
    )
  }
  
}



export default withAuth(PrivateRoute);
