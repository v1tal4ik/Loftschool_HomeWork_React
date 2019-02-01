import React ,{ Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorize} from '../../modules/Auth/auth';
import {exitAuth} from '../../modules/Auth/actions';
import './TopMenu.css';


class TopMenu extends Component{
    
    checkedAuth=(e)=>{
        const {isAuthorize}=this.props;
        if(!isAuthorize) e.preventDefault();
    }

    handleStatus=(e)=>{
        e.preventDefault();
        const{handlePressEnter,exitAuth} =this.props;
        
        if(e.target.textContent==='Вийти') {
            exitAuth();
        }else{
            handlePressEnter(e);
        }
    }

    render(){
        const{isAuthorize}=this.props;
        return (
                <div className='container'>
                    <div className='header'>
                        <Link to='/' className='title'>LoftTaxi</Link>
                            <ul className='nav'>
                                <Link to='/app' className='nav-item'        onClick={this.checkedAuth}>карта</Link>
                                <Link to='/profile' className='nav-item'    onClick={this.checkedAuth}>профіль</Link>
                                <Link to='/app' className='nav-item'  onClick={this.handleStatus}>{isAuthorize ? 'Вийти':'Увійти'}</Link>
                            </ul>
                    </div>
                </div>
        )
    }
}

export default connect(
    state=>({
        isAuthorize:getIsAuthorize(state)
    }),
    {exitAuth}
)(TopMenu);


