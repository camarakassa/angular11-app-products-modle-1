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

  GET_ALL_PRODUCTS = '[Product] Get All Products',
  GET_SELECTED_PRODUCTS = '[Product] Get Selected Products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available Products',
  SEARCH_PRODUCT = '[Product] Search Products',
  NEW_PRODUCT = '[Product] Add New Product',
  DELETE_PRODUCT = '[Product] Delete Product',
  SELECT_PRODUCT = '[Product] Select Product',
  EDIT_PRODUCT = '[Product] Edit product',
}

/* On pouvait les regrouper dans ProductQueryActions */

export enum ProductCommandActions {
  /*DELETE_PRODUCT = '[Product] Delete Product',
  SELECT_PRODUCT = '[Product] Select Product',
  EDIT_PRODUCT = '[Product] Edit product',*/
}

export interface ActionEvent<A, T> {
  type: A;
  payload?: T;
}
