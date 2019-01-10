import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

export default class Todo extends PureComponent {
  state = {
    inputValue: ''
  };
  
  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    const { savedData } = this.props;
    //по кнопке enter запустить saveData и передать key , value + обнулить state
  };

  toggleRecordComplete = event => {
    //запустить savwData  и меняем флаг isComplete (true/false)
  };

  createNewRecord = () => {
    //по кнопке enter запустить saveData и передать key , value
  };

  render() {
    return (
      <Card title={'Список справ'}>
            {renderEmptyRecord()}
            {this.props.savedData.map(this.renderRecord)}
        </Card>
    );
  }
  
  renderEmptyRecord() {
    return  <div>
              <input type="text" 
                className="todo-input t-input" 
                placeholder="Введіть задачу"  
                onChange={this.handleChange}/>
            </div>;
  }

  renderRecord = record => {
    //делает li + span при клике toggleRecordComplete()
    return 0;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
