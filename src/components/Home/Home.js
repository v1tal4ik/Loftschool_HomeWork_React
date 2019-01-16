import  React,{Component} from 'react';
// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

class Home extends Component {
    render(){
        return (
            <div>
                <h3 className='title'>Home</h3>
                <div>
                    <p className='t-greeting'>Вытаю вас в поштовому ящику!!!</p>
                </div>
            </div>
        )
    };
}

export default Home;

