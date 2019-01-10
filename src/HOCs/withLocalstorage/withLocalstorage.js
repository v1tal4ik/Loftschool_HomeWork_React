import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localstorageKey,innitValue) => (WrapperComponent) => {
    class Wrapper extends Component{
        saveData=()=>{
            //визвать ф-цию save
        }


        loadData =()=>{
            //визвать load
        }

        render(){
            const {forwardRef,...rest}= this.props;
            return(
                <WrapperComponent saveData={this.saveData} ref={forwardRef} {...rest}/>
            )
        }
    }

    return React.forwardRef((props,ref)=><Wrapper {...props} forwardRef={ref}/>);
};

export default withLocalstorage;
