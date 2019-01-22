import { combineReducers } from 'redux';
import search from './search-reducer';
import shows from './show-reducers';

// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

export default combineReducers({
  search,
  shows
});
