import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../../actions';
import getResult from '../../reducers/search-reducer';


// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
class Search extends Component{
    
    state={
        inputValue:''
    }

    hangleInput=e=>{
        this.setState({
            inputValue:e.target.value
        })
    }

    submitSearch=()=>{
        //запустить action SearchRequest и передать inputValue 
        const {inputValue} = this.props; 
        const {searchRequest} = this.props;
        searchRequest(inputValue);

        this.setState({
            inputValue:''
        })
    }

    render(){
        const {result,isFetching,error} = this.props;

        if(isFetching) return <p>Дание загружаються...</p>;
        if(error) return <p>Произошла сетевая ошибка</p>

        return (
            <div>
                <input type='text' placeholder='Введите название фильма...' onChange={this.hangleInput}/>
                <button onClick={this.submitSearch}>Найти</button>
            </div>
        )
    }
}

//return {result: getResult(state),isFetching:getFetching(state), Error:getError(state)}
const mapStateToProps = state => ({
    result: getResult(state)
  });
const mapDispatchToProps = {searchRequest};

export default connect(mapDispatchToProps,mapStateToProps)(Search);