import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../../actions';
import ShowPreview from '../ShowPreview';
import './Search.css';



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
        const {inputValue} = this.state; 
        const {searchRequest} = this.props;
        searchRequest(inputValue);

        
        this.setState({
            inputValue:''
        })
    }

    render(){
        const {result,isFetching,error} = this.props.search;

        return (
            <Fragment>
                <div className='search-block'>
                    <input type='text'className='search-inpt' placeholder='Введите название фильма...' onChange={this.hangleInput}/>
                    <button className='search-btn' onClick={this.submitSearch}>Найти</button>
                </div>
                {
                    <ShowPreview result={result}/>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps ={searchRequest};

export default connect(mapStateToProps,mapDispatchToProps)(Search);