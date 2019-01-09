import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const validEmail = 'student';
const validPassword = 1123;

class AuthProvider extends PureComponent {


  state = {
    email:'',
    authorizeError: '',
    isAuthorized: false
  }

  authorize = (email,password)=>{
    //проводить сравнение с валыдним емайл, и переписать state

    //если все верно то autorize = true,  а если нет - authError 
  }

  logout=()=>{
    //обнуляет state
  }

  getValue =()=>{
    //возвращает state + logout + authorize
  }

  render() {
    const { children } = this.props;
    return <Provider value ={this.getValue}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
