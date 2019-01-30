import React ,{ Component,Fragment}from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getLogin,getPassword,getIsAuthorize,getError} from '../../modules/Auth/auth';
import {successAuth,errorAuth} from '../../modules/Auth/actions';

 

class Login extends Component{
    state={
        current_login:'',
        current_password:''
    }

    handleChange=(e)=>{
         if(e.target.name === 'login') this.setState({current_login:e.target.value});
         if(e.target.name === 'password') this.setState({current_password:e.target.value});
    }

    handlePressEnter=(e)=>{
        e.preventDefault();
       const {login,password,successAuth,errorAuth} = this.props;
       const {current_login,current_password} = this.state;
       (login === current_login && password===current_password) ? successAuth(): errorAuth();
    }


    render(){
        const{isAuthorize,error}=this.props;

        if(isAuthorize) return <Redirect to='/app' />;
    //console.log(this.props);
        return (
        <Fragment>
            <form>
                Логин: <br />
                <input name="login" type="text" size="25"  onChange={this.handleChange}/> <br />
                Пароль: <br />
                <input name="password" type="password" size="25" onChange={this.handleChange}/> <br />
                <p>{error}</p>
                <button onClick={this.handlePressEnter}>Ввійти</button>
            </form>
        </Fragment>
        )
    }
}

    export default connect(
        state=>({
            login:getLogin(state),
            password: getPassword(state),
            isAuthorize:getIsAuthorize(state),
            error:getError(state)
        }),
        {successAuth,errorAuth}
    )(Login);