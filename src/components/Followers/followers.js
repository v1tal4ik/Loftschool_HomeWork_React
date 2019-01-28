import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getData, getIsLoading} from '../../modules/Followers/reducer';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const {isLoading,data} = this.props;
    console.log(this.props);

    if (!data) return <p className="t-no-user-info">Нет информации о followers</p>

    return (
        <div className={cx(styles.root, 't-followers')}>
            {data.map(follower => (
                <div key={follower.id}>
                    <img src={follower.avatar_url} />
                    <p>{follower.login}</p>
                </div>
            ))}
        </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(Followers);
/*

            */