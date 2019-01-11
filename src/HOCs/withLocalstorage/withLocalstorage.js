import React, { Component } from 'react';
import { load, save } from '../../localstorage';


var list;//масив обєктов записей

const withLocalstorage = (localstorageKey,innitValue) => (WrapperComponent) => {
    class Wrapper extends Component{
        saveData=(key,data,props)=>{
            let new_data = {
                id: key,
                isComplete: props.complete,
                text: data
            }
            props.index !== undefined ? list.splice(props.index,1,new_data) : list.unshift(new_data);
            save('todo-app',list);
        }


        loadData =()=>{
            list = load('todo-app')|| [];
            return list;
        }

        render(){
            const {forwardRef,...rest}= this.props;
            return(
                <WrapperComponent saveData={this.saveData} loadData={this.loadData} ref={forwardRef} {...rest}/>
            )
        }
    }

    return React.forwardRef((props,ref)=><Wrapper {...props} forwardRef={ref}/>);
};

export default withLocalstorage;
