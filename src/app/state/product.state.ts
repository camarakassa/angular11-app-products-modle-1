export enum DataStateEnum {

  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}

export enum ProductQueryActions {

  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
  GET_SELECTED_PRODUCTS = 'GET_SELECTED_PRODUCTS',
  GET_AVAILABLE_PRODUCTS = 'GET_AVAILABLE_PRODUCTS',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  SEARCH_PRODUCT = 'SEARCH_PRODUCT',
  NEW_PRODUCT = 'NEW_PRODUCT',
}

export enum ProductCommandActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  SELECT_PRODUCT = 'SELECT_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
}

export interface ActionEvent<A, T> {
  type: A;
  payload?: T;
}
