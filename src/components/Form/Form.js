import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Form/Form.css';


export default class Form extends Component{
    render(){
        return(
            <div className="app-container">
            <form className="form">
                <h1>Введите свои дание агент</h1>
                <p className="field">
                    <label className="field__label">
                        <span className="field-label">Имя</span>
                    </label>
                    <input className="field__input field-input t-input-firstname firstname" name="firstname"></input>
                    <span className="field__error field-error t-error-firstname"></span>
                </p>

                <p className="field">
                    <label className="field__label">
                        <span className="field-label">Фамилия</span>
                    </label>
                    <input className="field__input field-input t-input-lastname lastname" name="lastname"></input>
                    <span className="field__error field-error t-error-lastname"></span>
                </p>

                <p className="field">
                    <label className="field__label">
                        <span className="field-label">Пароль</span>
                    </label>
                    <input className="field__input field-input t-input-password password" name="password"></input>
                    <span className="field__error field-error t-error-password"></span>
                </p>

                <div className="form__buttons"><input type="submit" className="button t-submit" value="Проверить" onClick={this.checkedAll}></input></div>    
            </form>
            </div>
        )
    }

    state = {
        firstName:'james',
        lastName:'bond',
        password: '007'
    }


    checkedAll=(e)=>{
        e.preventDefault();
        
        let counter = 0;
        this.chekedFirstName() ? counter++ : counter = 0;
        this.chekedlastName() ? counter++ : counter = 0;
        this.chekedPassword() ? counter++ : counter = 0;
        
        if(counter === 3){
            console.log('Log In succsesfull')
            ReactDOM.render(<Window />, document.getElementById('root'));
        }
    }

    chekedFirstName=()=>{
        let content;
        let firstname = document.querySelector('.firstname').value.toLowerCase();

        if(firstname === this.state.firstName){
            return true;
        }else {
            firstname === '' ? content = 'Нужно указать имя': content = 'Имя указано не верно';
        }
        document.querySelector('.t-error-firstname').textContent = content;
        return false;
    }

    chekedlastName=()=>{
        let content;
        let lastname = document.querySelector('.lastname').value.toLowerCase();
        if(lastname === this.state.lastName){
            return true;
        }else {
            lastname === '' ? content = 'Нужно указать фамилию': content = 'Фамилию указано не верно';
        }
        document.querySelector('.t-error-lastname').textContent = content;
        return false;
    }

    chekedPassword=()=>{
        let content;
        let password_value = document.querySelector('.password').value;
        if(password_value === this.state.password){
            return true;
        }else {
            password_value === '' ? content = 'Нужно указать пароль': content = 'Пароль указано не верно';
        }
        document.querySelector('.t-error-password').textContent = content;
        return false;
    }
}



export  class Window extends Component{
    render(){
        return(
            <img src="../assets/bond_approve.jpg" alt="bond approve" className="t-bond-image"></img>
        )
    }
}

