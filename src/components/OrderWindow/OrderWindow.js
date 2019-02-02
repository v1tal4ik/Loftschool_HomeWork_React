import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getName} from '../../modules/User/user';
import {getIsOrder} from '../../modules/Map/map';
import {saveCoords,skipRoute} from '../../modules/Map/actions';
import { Select } from 'antd';
import {getListAddress,getRoute} from '../../api';
import './antd-select.css';
import './OrderWindow.css';


const Option = Select.Option;

class OrderWindow extends Component {

    state={
        address:[],
        from:'',
        to:'',
        error:''
    }

    hangleChange=(e,place)=>{
        if(place === 'from') this.setState({from:e});
        if(place === 'to') this.setState({to:e});
    }

    fetchAddress=()=>{
        const{from,to} = this.state;
        if(from && to){
            if(from !== to){
                const{saveCoords}= this.props;
                getRoute(from,to).then(route=>{
                saveCoords(route);
            });
            }else{
                return this.setState({
                    error:'* Некоректний адрес'
                });
            }

        this.setState({
            error:''
        })
        }else{
            this.setState({
                error:'* Заповніть усі поля'
            })
        }
    }

    newOrder=()=>{
        const {skipRoute}= this.props;
        skipRoute();
    }
    
    componentDidMount(){
       getListAddress().then(result=>{
           this.setState({
            address:result.addresses
           });
       })
    }


    render(){
        const {isIndetefine,isOrder} = this.props;
        const{address,error}=this.state;
        if(!isIndetefine){
            return(
                <div className='order-window'> 
                    <div className='profile-modal'>
                        <h1>Заповніть платіжні дані</h1>
                        <p>Вкажіть інформацію про банківську карту, щоб зробити замовлення.</p>
                        <Link to='/profile' ><button className='profile-btn'>Перейти</button></Link>
                    </div>
                </div>
            )
        }else{
            if(isOrder){
                return (
                    <div className='order-window'>
                         <div className='profile-modal'>
                            <h1>Замовлення прийнято</h1>
                            <p>Ваше таксі вже їде до Вас. Приблизний час очікування 10 хвилин</p>
                            <button className='profile-btn' onClick={this.newOrder}>Зробити нове Замовлення</button>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div className='order-window'>
                         <div className='profile-modal'>
                            <h1>Виклик таксі</h1>
                            <Select 
                            name = 'from' 
                            placeholder="Виберіть адрес відправлення" 
                            optionFilterProp="children" 
                            className='order-window-select'
                            onChange={(e)=>this.hangleChange(e,'from')}
                            >
                                {address.map(street=>{
                                    return <Option key ={street} value={street}>{street}</Option>
                                })}
                            </Select>
                            <Select 
                            placeholder="Виберіть адрес прибуття" 
                            optionFilterProp="children" 
                            className='order-window-select'
                            onChange={(e)=>this.hangleChange(e,'to')}
                            >
                                {address.map(street=>{
                                    return <Option key ={street} value={street}>{street}</Option>
                                })}
                            </Select>
                            <p className='order-window-error'>{error}</p>
                            <button className='profile-btn' onClick={this.fetchAddress} >Викликати таксі</button> 
                        </div>
                    </div>
                )
            }
        }
    }
}


  
  export default connect(
      state=>({
        isIndetefine:getName(state),
        isOrder:getIsOrder(state)
      }),{saveCoords,skipRoute})(OrderWindow);

