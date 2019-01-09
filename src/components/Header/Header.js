import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer >
        {
          ({isAuthorized,email,logout})=>{
            //какие дание - то и рендерить
          })
        }
      </AuthConsumer>
    );
  }
}

export default Header;
