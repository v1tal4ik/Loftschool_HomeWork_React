import React ,{ Component,Fragment}from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorize} from '../../modules/Auth/auth';
import TopMenu from '../TopMenu/TopMenu';
import UserForm from '../UserForm/UserForm';
import './Profile.css';


class Profile extends Component{
    render(){
        const {isAuthorize} =this.props
        if(!isAuthorize) return <Redirect to='/' />;
        return (
            <Fragment>
                <TopMenu />
                <UserForm />
            </Fragment>
        )
    }
}

export default connect(
    state=>({
        isAuthorize:getIsAuthorize(state)
    }),
    {}
)(Profile);