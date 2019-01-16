import  React , { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './LoginForm.css'
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app


class LoginForm extends Component {
    state ={
        email: '',
        password: ''
    }

    changeEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }

    changePassword=(e)=>{
        this.setState({
            password: e.target.value
        })
    }

    callAuthorize=()=>{
        const {authorize}= this.props;
        const {email,password} = this.state;
        authorize(email,password);
        //authorize('test@test.ru','321');
    }

    render(){
        const {isAuthorized,authError}= this.props;
        return (
            isAuthorized ? (
                <Redirect to ='/app'/>
            ):(
                <div className="bg">
                    <div className="form">
                        <p>
                            <label htmlFor="email"><span className="labelText">Почта</span></label>
                            <input type="text" name="email" className="input" onChange={this.changeEmail} />
                        </p>
                        <p>
                            <label htmlFor="password"><span className="labelText">Пароль</span></label>
                            <input type="password" name="password" className="input" onChange={this.changePassword}/>
                        </p>
                       {authError !=='' ? <p className="error">{authError}</p>: null}
                        <div className="buttons"><button className="button" onClick={this.callAuthorize}>Войти</button></div>
        
                    </div>
            </div>
            )

        )
    }
}


export default withAuth(LoginForm);

