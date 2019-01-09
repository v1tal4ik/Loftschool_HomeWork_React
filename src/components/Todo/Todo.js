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
  handleChange = event => {};

  createNewRecordByEnter = event => {};

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    return (
      <Card title={'Список справ'}/>
    );
  }
  
  renderEmptyRecord() {
    return (
      <input type="text"/>
    )
  }

  renderRecord = record => {
    return 0;
  };
}

/*export default withLocalstorage('todo-app', [])(Todo);*/
