import  React,{Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect,Link } from 'react-router-dom';
import {withData} from '../../context/Data';
import OutboxMail from '../OutboxMail';
// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

class OutboxList extends Component {
    render() {
      const outboxEmails = this.props.data.outbox;
      return (
        <BrowserRouter>
            <div>
            <h3 className="title">Inbox</h3>
                <div>
                    <ul className='link-list'>
                        {
                        outboxEmails.map((item)=>{
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
                 outboxEmails.map((item)=>{
                     return <Route key={item.id} path={`${this.props.match.path}/${item.id}`} component={OutboxMail} />
                 })   
                }
            </div>
        </BrowserRouter>
      );
    }
  }

export default withData(OutboxList);



