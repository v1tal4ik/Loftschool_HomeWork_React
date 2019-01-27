import React, { Component } from 'react';
import {connect } from 'react-redux';
import SelectSol from '../SelectSol/SelectSol';
import {getSol} from '../../modules/RoverPhotos/RoverPhotos';
import {changeSol,fetchPhotosRequest} from '../../modules/RoverPhotos';

// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

class RoversViewer extends Component{

    componentDidMount(){
        console.log('work-2');
    }

    click(){
        console.log('click');
        fetchPhotosRequest('olal',12);
    }

    render(){
        console.log(this.props);
        const {changeSol ,sol:{current,min,max}} = this.props;
        return (
            <div>
                <SelectSol selectedSol={current} minSol={min} maxSol={max}  changeSol={changeSol}/>
                <button onClick={this.click}>click</button>
            </div>
            )
    }
}

const mapStateToProps =(state)=>({
        sol:getSol(state)
});

const mapDispatchToProps = {changeSol,fetchPhotosRequest};

export default connect(mapStateToProps,mapDispatchToProps)(RoversViewer);