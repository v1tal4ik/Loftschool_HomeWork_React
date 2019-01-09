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

  createNewRecordByEnter = event => {};

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    return (
      <Card 
          title={'Список справ'} 
          children={
                      <div>
                        <input type="text" 
                               className="todo-input t-input" 
                               placeholder="Введіть задачу"  
                               onChange={this.handleChange}/>
                               
                      </div>
                    }
        />
    );
  }
  
  renderEmptyRecord() {
    return 0;
  }

  renderRecord = record => {
    return 0;
  };
}

/*export default withLocalstorage('todo-app', [])(Todo);*/
