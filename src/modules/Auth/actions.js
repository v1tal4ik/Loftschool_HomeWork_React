import { createAction } from 'redux-actions';

export const successAuth = createAction('AUTH/SUCCESS_AUTH');
export const errorAuth = createAction('AUTH/ERROR_AUTH');
export const exitAuth = createAction('AUTH/EXIT_AUTH');