import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getData, getIsLoading} from '../../modules/Followers/reducer';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const {isLoading,data} =this.props;
    return (
      <div className={cx(styles.root, 't-followers')}>
     {isLoading ?  <p>Загрузка...</p>: null}
     {data !==null && data.length > 0 ? <p>true</p> : <p>Нет информации о followers</p>}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(Followers);
