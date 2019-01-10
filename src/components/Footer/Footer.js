import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer >
        {({ isAuthorized, email}) =>
              isAuthorized ? (
                <div className="p.t-footer">
                  {`Ви гость в етой системе`}
                </div>
              ) : (
                <div className="p.t-footer">
                {`Ви вошли как ${email}`}
              </div>
              )
            }
      </AuthConsumer>
    );
  }
}

export default Footer;
