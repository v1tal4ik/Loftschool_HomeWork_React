import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const validEmail = 'student@oo.com';
const validPassword = '123';

class AuthProvider extends PureComponent {


  state = {
    email:'',
    authorizeError: '',
    isAuthorized: false
  }

  authorize = (email,password)=>{
    if(email === validEmail && validPassword === password){
      this.setState({
        email: email,
        isAuthorized: true
      })
    }else{
      this.setState({
        authorizeError:'Email или пароль введён не верно'
      })
    }
  }

  logout=()=>{
    this.setState({
      email:'',
      authorizeError: '',
      isAuthorized: false
    })
  }

  getValue =()=>{
    const {email,authorizeError,isAuthorized} = this.state;
    const {authorize,logout} = this;

    let obj = {
      email: email,
      authorizeError:authorizeError,
      isAuthorized:isAuthorized,
      authorize: authorize,
      logout: logout
    };
    return obj;
  }

  render() {
    const { children } = this.props;
    return <Provider value ={this.getValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
