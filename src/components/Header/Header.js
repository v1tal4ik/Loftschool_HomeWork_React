import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer >
        {({ isAuthorized, email, logout }) =>
              isAuthorized ? (
                <div>
                  {email}
                  <Button className={'button.t-logout'} children={"Вийти"} onClick={logout}/>
                </div>
              ) : null
            }
      </AuthConsumer>
    );
  }
}

export default Header;
