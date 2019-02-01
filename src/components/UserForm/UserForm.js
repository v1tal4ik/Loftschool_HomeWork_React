import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getName,getNumberOfCard,getDate,getCVV,getError} from '../../modules/User/user';
import {saveData,fetchError} from '../../modules/User/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './UserForm.css';

class UserForm extends Component{
  state={
    name:this.props.name,
    numberOfCard:this.props.numberOfCard,
    date:this.props.date,
    cvv:this.props.cvv,
    isOpen:false
  }
  

  handlePressEnter=(e)=>{
    e.preventDefault();
    const {saveData,fetchError} = this.props;
    const {name,numberOfCard,date,cvv} = this.state;
    if(name && numberOfCard && date && cvv){
      saveData(this.state);
      this.setState({isOpen:true});
    }else{
      fetchError('* Будь ласка введіть усі дані');
    }
  }

  handleChange=(e)=>{
    if(e.target.name === 'name') this.setState({name:e.target.value});
    if(e.target.name === 'numberOfCard') this.setState({numberOfCard:e.target.value});
    if(e.target.name === 'date') this.setState({date:e.target.value});
    if(e.target.name === 'cvv') this.setState({cvv:e.target.value});
  }

  validateCard=(e)=>{
    if(e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) e.target.value = e.target.value + ' ';
  }

  handleClose=()=>this.setState({isOpen:false});

  render(){
    const {error} = this.props;
    const {isOpen,name,numberOfCard,date,cvv} = this.state;

    return (
      <Fragment>
       <form className='user-form'>
              <h3 className='user-form-title'>Профіль</h3>
              <h3 className='user-form-sub_title'>Спосіб оплати</h3>

              <div className='inp-block'>
              <label className='user-form-label'>Імя власника*</label><br/>
              <input className="user-form-input" type="text"  name='name' value={name} onChange={this.handleChange} required/>
              </div>

              
              <div className='inp-block'>
              <label className='user-form-label'>Номер карти*</label><br/>
              <input className="user-form-input" type="text" maxLength="19" name='numberOfCard' value={numberOfCard}  onChange={this.handleChange} required />
              </div>

              <div className='inp-block'>
              <label className='user-form-label'>Дата закінчення сроку*</label><br/>
              <input className="user-form-input" type="date" name='date'  value={date} onChange={this.handleChange} required />
              </div>

             <div className='inp-block'>
             <label className='user-form-label'>CVV *</label><br/> 
              <input className="user-form-input" type="password" maxLength='3' name='cvv' value={cvv} onChange={this.handleChange} required/>
             </div>

              <p className='user-form-error'>{error}</p>
              <button className='user-form-btn' onClick={this.handlePressEnter}>Зберегти</button> 
          </form>
          <Dialog
        open={isOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Ваші дані були успішно збережено"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Ваші дані були успішно збережено. Тепер Ви користувач, і ви можете повноцінно використовувати додаток!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            <Link to='/app' className='user-form-link'>Перейти на карту</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
    )
  }
}

export default connect(
  state=>({
      name:getName(state),
      numberOfCard:getNumberOfCard(state),
      date:getDate(state),
      cvv:getCVV(state),
      error:getError(state)
  }),
  {saveData,fetchError}
)(UserForm);