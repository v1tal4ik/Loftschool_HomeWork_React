import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../Form/Form.css';


const history = createBrowserHistory();


export default class Form extends Component{
    render(){
        return(
            <BrowserRouter history = {history}>
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
                    <input type ="password" className="field__input field-input t-input-password password" name="password" onBlur={this.chekedPassword}></input>
                    <span className="field__error field-error t-error-password">{this.state.passwordContent}</span>
                </p>

                <Link to='/main'><div className="form__buttons"><input type="submit" className="button t-submit" value="Проверить" onClick={this.checkedAll}></input></div></Link>
                <Route exact path="/main" component={Window} />    
            </form>
            </div>
            </BrowserRouter>

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
        const { firstNameContent, lastNameContent, passwordContent } = this.state;
        if(firstNameContent === '' && lastNameContent === '' && passwordContent === '')
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
            content = (firstname === '') ? 'Нужно указать имя': 'Имя указано не верно';
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
            content= (lastname === '') ? 'Нужно указать фамилию': 'Фамилию указано не верно';
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
           content =( password_value === '') ? 'Нужно указать пароль': 'Пароль указано не верно';
        }
        this.setState({
            passwordContent: content
        });
        return false;
    }
}



class Window extends Component{
    render(){
        return(
            <img src="https://cdn.images.express.co.uk/img/dynamic/36/590x/James-Bond-25-release-date-when-is-new-James-Bond-movie-out-1020320.jpg?r=1537442060383" alt="bond approve" className="t-bond-image"></img>
        )
    }
}






