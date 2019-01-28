import React, { Component } from 'react';
import {connect } from 'react-redux';
import SelectSol from '../SelectSol/SelectSol';
import RoverPhotos from '../RoverPhotos/RoverPhotos';
import styles from './RoversViewer.module.css';
import {
    changeSol,
    fetchPhotosRequest,
    getSol,
    getPhotosRover,
    names
} from '../../modules/RoverPhotos';


// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

class RoversViewer extends Component{

    componentDidMount(){this.photoLoad()};

    componentDidUpdate(prevProps){
        const {sol:{current}} = this.props;
        const lastValue = prevProps.sol.current;

        current!== lastValue ? this.photoLoad(): console.log('');
    }

    photoLoad(){
        const {fetchPhotosRequest,sol:{current}} = this.props;
        names.forEach((name)=>{
           fetchPhotosRequest({name,sol:current}); 
        });
    }


    renderPhotos(){
        const {sol:{current},photos}=this.props;
        const empty = [];
        
        return (
                names.map(name =>{
                    return <RoverPhotos 
                        key={name}
                        name={name}
                        photos={
                            (photos[name][current] !== undefined && photos[name][current].photos.length!==0 )? photos[name][current].photos: empty
                        }
                        />
                })
            )
    }


    render(){
        const {changeSol ,sol:{current,min,max},photos} = this.props;
        return (
            <div className={styles.root}>
                <SelectSol selectedSol={current} minSol={min} maxSol={max}  changeSol={changeSol}/>
                <div className={styles.containerRovers}>{this.renderPhotos()}</div>
            </div>
            )
    }
}

const mapStateToProps =(state)=>({
        sol:getSol(state),
        photos:getPhotosRover(state)
});

const mapDispatchToProps = {changeSol,fetchPhotosRequest};

export default connect(mapStateToProps,mapDispatchToProps)(RoversViewer);         