import React ,{ Component,Fragment}from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getLogin,getPassword,getIsAuthorize,getError} from '../../modules/Auth/auth';
import {successAuth,errorAuth} from '../../modules/Auth/actions';
import TopMenu from '../TopMenu/TopMenu';
import './Login.css';

 

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
       const {login,password,successAuth,errorAuth} = this.props;
       const {current_login,current_password} = this.state;
       if(login === current_login && password===current_password){
           successAuth();
       }else{
           e.preventDefault(); 
           errorAuth();
       }
    }


    render(){
        const{isAuthorize,error}=this.props;

        if(isAuthorize) return <Redirect to='/app' />;
        return (
        <Fragment>
            <TopMenu handlePressEnter={this.handlePressEnter}/>
            <form className='login-form'>
                <h3 className='login-form-title'>Увійти</h3> <br/>

                <label className='login-form-label'>Імя користувача*</label> <br/>
                <input className="login-form-input" type="text" size="25" name='login'  onChange={this.handleChange}/><br/>
                
                <label className='login-form-label'>Пароль*</label> <br/>
                <input className="login-form-input" type="password" size="25" name='password' onChange={this.handleChange}/><br/>
                <p className='login-form-error' >{error}</p>
                <Link to='/app'><button className='login-form-btn' onClick={this.handlePressEnter}>Увійти</button></Link> 
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
/*<Fragment>
            <TopMenu handlePressEnter={this.handlePressEnter}/>
            <form className='login-form'>
                <h3 className='login-form-title'>Увійти</h3> <br/>

                <label className='login-form-label'>Імя користувача*</label> <br/>
                <input className="login-form-input" type="text" size="25" name='login'  onChange={this.handleChange} required/><br/>
                
                <label className='login-form-label'>Пароль*</label> <br/>
                <input className="login-form-input" type="password" size="25" name='password' onChange={this.handleChange}/><br/>
                <p className='login-form-error' >{error}</p>
                <Link to='/map'><button className='login-form-btn' onClick={this.handlePressEnter}>Увійти</button></Link> 
            </form>
        </Fragment>*/