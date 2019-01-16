import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';
// Реализуйте компонент OutboxMail по примеру InboxMail.
// Он должен показывать выбранное письмо на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать компонент Mail для отображения данных.


class OutboxMail extends PureComponent {
  render() {
    const {data}=this.props;
    const mail = data.outbox.find(mail =>{
      let currentMail = '/app/outbox/'+ mail.id;
      return currentMail === this.props.match.path;
    });
    return (
      <React.Fragment>
          <p className="t-mail-from">
            From: <b>{mail.to}</b>
          </p>
          <p className="t-mail-body">{mail.body}</p>
        </React.Fragment>
    );
  }
}

export default withData(OutboxMail);

