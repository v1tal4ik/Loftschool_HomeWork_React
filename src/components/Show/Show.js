import React, { Component } from 'react';
import getShowInfo from './../../api';



export default class Show extends Component{
    constructor(props){
        super(props);
        this.state = {
            showId : '',
            data: {}
        }
    }

    render(){
        let {showId} = this.state;
        return(
            <div>
                <div>{showId}</div>
            </div>
        )
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.showId !== prevState.showId){
            getShowInfo(nextProps.showId).then((response)=>{
                console.log(response);
                return {
                    showId:nextProps.showId,
                    data: response
                }
            })
            
        } else{
            return null;
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
    }
}