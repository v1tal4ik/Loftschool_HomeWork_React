import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE

export const fetchFollowersRequest = createAction('FOLLOWERS/FETCH_REQUEST');
export const fetchFollowersSuccess = createAction('FOLLOWERS/FETCH_SUCCESS');
export const fetchFollowersFailure = createAction('FOLLOWERS/FETCH_FAILURE');


