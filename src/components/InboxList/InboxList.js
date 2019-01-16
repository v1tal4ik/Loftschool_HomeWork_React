import  React,{Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect,Link } from 'react-router-dom';
import {withData} from '../../context/Data';
import InboxMail from '../InboxMail';
import '../InboxList/Inbox.List.css';
// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

class InboxList extends Component {
    render() {
      const inboxEmails = this.props.data.inbox;
      return (
        <BrowserRouter>
            <div>
            <h3 className="title">Inbox</h3>
                <div>
                    <ul className='link-list'>
                        {
                        inboxEmails.map((item)=>{
                            return ( 
                            <Link  
                                key={item.id} 
                                className='link-item' 
                                to={`${this.props.match.path}/${item.id}`} 
                                id={item.id}>
                                {`${item.body.substring(0, 50)}...`}
                            </Link>
                            )
                           
                        })
                        }
                        
                    </ul>
                </div>
                {
                 inboxEmails.map((item)=>{
                     return <Route key={item.id} path={`${this.props.match.path}/${item.id}`} component={InboxMail} />
                 })   
                }
            </div>
        </BrowserRouter>
      );
    }
  }

export default withData(InboxList);

/*<Link  key={inboxEmails[0].id} className='link' to={`${this.props.match.path}/${inboxEmails[0].id}`} id={inboxEmails[0].id}>{inboxEmails[0].from}</Link>*/