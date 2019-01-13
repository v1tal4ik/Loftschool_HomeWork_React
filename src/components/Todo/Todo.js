import React, { PureComponent, Fragment } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';


var counter;//счетчик записей
class Todo extends PureComponent {
  state = {
    inputValue: ''
  };
  
  getId() {
    const { loadData } = this.props;
    const biggest = loadData().reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest+1;
  }


  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = e => {
    if(e.keyCode === 13){
       this.createNewRecord(e);
       e.target.value ='';
    }
  };

  toggleRecordComplete = e => {
    const { saveData, loadData} = this.props;
    let inputValue = e.target.previousElementSibling.textContent;
    
    loadData().forEach((el,index)=>{
      if(el.text === inputValue){
        let toggleComplete = el.isComplete;
        toggleComplete  ? toggleComplete = false: toggleComplete = true;
        let props ={
          complete: toggleComplete,
          index:index
        }
        saveData(el.id,inputValue,props);
      }

      this.setState({change: Math.random()});
    })
  };

  createNewRecord = (e) => {
    const { saveData } = this.props;
    const {inputValue} = this.state;

    counter = this.getId();

    let props ={
      complete: false
    }

    saveData(counter,inputValue,props);

      this.setState({inputValue:''});
      e.target.previousElementSibling ?  e.target.previousElementSibling.value = '': null;
  };

  render() {
    return (
      <Card title={'Список справ'}>
            {this.renderEmptyRecord()}
            {this.renderRecord()}
        </Card>
    );
  }
  
  renderEmptyRecord() {
    return  <div className='todo t-todo-list'>
              <div className ="todo-item todo-item-new">
                  <input type="text" 
                    className="todo-input t-input" 
                    placeholder="Введіть задачу"  
                    onChange={this.handleChange}
                    onKeyDown ={this.createNewRecordByEnter}/>
                    <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
              </div>
            </div>;
  }


  // &#10003; &#8722;

  renderRecord = record => {
    //делает li + span при клике toggleRecordComplete()
    const {loadData} = this.props;
    let items = loadData();
    if (items){
      return (
        <div className="todo t-todo-list">
          {items.map((el)=>{
            return <div className='todo-item t-todo' key={el.text}>
                          <div>{el.text}</div>
                          <span className="todo-item__flag t-todo-complete-flag" onClick={this.toggleRecordComplete}>
                          { el.isComplete ? <Fragment>&#10003;</Fragment> : <Fragment> &#8722;</Fragment> }
                          </span>
                    </div>
          })}
        </div>
      )
    }
  };
}

export default withLocalstorage('todo-app', [])(Todo);
