import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {data}=this.props;
    const mail = data.inbox.find(mail =>{
      let currentMail = '/app/inbox/'+ mail.id;
      return currentMail === this.props.match.path;
    });
    
    return (
      <React.Fragment>
          <p className="t-mail-from">
            From: <b>{mail.from}</b>
          </p>
          <p className="t-mail-body">{mail.body}</p>
        </React.Fragment>
    );
  }
}

export default withData(InboxMail);
