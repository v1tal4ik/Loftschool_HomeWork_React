import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import {getData, getIsLoading} from '../../modules/User/reducer';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const {isLoading,data} = this.props;

    if (isLoading) return <p>Загрузка...</p>
    if (!data) return <p >Нет информации о пользователе</p>

    return (
      <div className={styles.root}>
          <div className={styles.imageWrapper}>
              <img className={styles.image} src={data.avatar_url} />
          </div>
          <div>
              <p className='t-user-name'>{data.name}</p>
              <p className='t-user-bio'>{data.bio}</p>
          </div>

      </div>
  );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(UserInfo);
