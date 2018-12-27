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
                    <input className="field__input field-input t-input-firstname firstname" name="firstname" onBlur={this.chekedFirstName}></input>
                    <span className="field__error field-error t-error-firstname">{this.state.firstNameContent}</span>
                </p>

                <p className="field">
                    <label className="field__label">
                        <span className="field-label">Фамилия</span>
                    </label>
                    <input className="field__input field-input t-input-lastname lastname" name="lastname" onBlur={this.chekedlastName}></input>
                    <span className="field__error field-error t-error-lastname">{this.state.lastNameContent}</span>
                </p>

                <p className="field">
                    <label className="field__label">
                        <span className="field-label">Пароль</span>
                    </label>
                    <input className="field__input field-input t-input-password password" name="password" onBlur={this.chekedPassword}></input>
                    <span className="field__error field-error t-error-password">{this.state.passwordContent}</span>
                </p>

                <div className="form__buttons"><input type="submit" className="button t-submit" value="Проверить" onClick={this.checkedAll}></input></div>    
            </form>
            </div>
        )
    }

    state = {
        firstName:'james',
        lastName:'bond',
        password: '007',
        firstNameContent: '',
        lastNameContent: '',
        passwordContent: '',
    }


    checkedAll=(e)=>{
        e.preventDefault();
        if(this.state.firstNameContent === '' && this.state.lastNameContent === '' && this.state.passwordContent === '')
        ReactDOM.render(<Window />,document.getElementById('root'));
    }

    chekedFirstName=(e)=>{
        let content;
        let firstname = e.target.value.toLowerCase();


        if(firstname === this.state.firstName){
            this.setState({
                firstNameContent: ''
            })
            return true;
        }else {
            firstname === '' ? content = 'Нужно указать имя': content = 'Имя указано не верно';
        }
        this.setState({
            firstNameContent: content
        });
        return false;
    }

    chekedlastName=(e)=>{
        let content;
        let lastname = e.target.value.toLowerCase();
        if(lastname === this.state.lastName){
            this.setState({
                lastNameContent: ''
            })
            return true;
        }else {
            lastname === '' ? content = 'Нужно указать фамилию': content = 'Фамилию указано не верно';
        }
        this.setState({
            lastNameContent: content
        });
        return false;
    }

    chekedPassword=(e)=>{
        let content;
        let password_value = e.target.value.toLowerCase()
        if(password_value === this.state.password){
            this.setState({
                passwordContent: ''
            })
            return true;
        }else {
            password_value === '' ? content = 'Нужно указать пароль': content = 'Пароль указано не верно';
        }
        this.setState({
            passwordContent: content
        });
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

