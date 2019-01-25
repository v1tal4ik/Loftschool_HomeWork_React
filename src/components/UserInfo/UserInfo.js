import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import {getData, getIsLoading} from '../../modules/User/reducer';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const {isLoading,data} = this.props;
    return (
      <div className={styles.root}>
        {isLoading ?  <p>Загрузка...</p>: null}
        {data !==null && data.length > 0 ? <p>true</p> : <p>Нет информации о пользователе</p>}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(UserInfo);
