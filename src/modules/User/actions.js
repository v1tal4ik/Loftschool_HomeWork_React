import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchUserRequest = createAction('USER/FETCH_REQUEST');
export const fetchUserSuccess = createAction('USER/FETCH_SUCCESS');
export const fetchUserFailure = createAction('USER/FETCH_FAILURE');