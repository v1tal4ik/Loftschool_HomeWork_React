import React,{ Component } from 'react'
import Message from '../Message/Message'



export default class Chat extends Component{
    
    state = {
        messages: [],
        messageInput: ''
    }


    render(){
        return <div className = 'chat'>
            {
                this.state.messages.map((element,index)=>{
                    return( 
                        <Message key ={index} text={element.text}/>
                    ) 
                })
            }
            <input className = 'input-message' onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/> 
        </div>
    }
   
    changeInputMessage=e=>{
         this.setState({
            messageInput: e.target.value
        })
    }

    sendMessageOnEnter=e=>{
        if(e.key === "Enter"){
            this.state.messages.push({text:this.state.messageInput});
            this.setState({
                messageInput : ''
            })
        }
    }
}