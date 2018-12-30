import React, { Component } from 'react';
import { getShowInfo } from './../../api';
import './Show.css';



export default class Show extends Component{
    state = {
        showId : 'Шоу не вибрано!',
        data: {}
    }

    componentDidMount=()=>{
        if(this.props.showId !== ''){
            getShowInfo(this.props.showId).then((response)=>{
                this.setState({
                    showId: this.props.showId,
                    data:{
                        name:response.name,
                        genres: response.genres.join(' '),
                        image: response.image.medium,
                        language: response.language,
                        premiered: response.premiered,
                        summary: response.summary
                    }
                })
            })
        }else{
            return 0;
        }
    }

    

    render(){
        const {showId} = this.state;
        const {name,genres,image,language,premiered,summary} = this.state.data;
        return(
            <div className="container">
                <div className="state" >{showId}</div>
                <div className="info">
                    <img src={image} alt="film" className="show-image"/>
                    <div className="content">
                        <div className="name">{name}</div>
                        <div className="genres"><span>Жанр:</span> {genres}</div>
                        <div className="language"><span>Мова:</span>{language}</div>
                        <div className="premiered"><span>Премєра:</span>{premiered}</div>
                        <div className="describe"><span>Опис:</span>{summary}</div>
                    </div>
                </div>
            </div>
        )
    }
}