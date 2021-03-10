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

export enum QueryActions {

  GET_ALL_PRODUCTS = '[Product] Get All Products',
  GET_SELECTED_PRODUCTS = '[Product] Get Selected Products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available Products',
  SEARCH_PRODUCT = '[Product] Search Products',
  SELECT_PRODUCT = '[Product] Select Product',

}

/* On pouvait les regrouper dans ProductQueryActions */

export enum CommandActions {
  NEW_PRODUCT = '[Product] Add New Product',
  DELETE_PRODUCT = '[Product] Delete Product',
  EDIT_PRODUCT = '[Product] Edit product',
  PRODUCT_ADDED = '[Product] Product added',
  PRODUCT_UPDATED = '[Product] Product updated'
}

export interface ActionEvent<A, T> {
  type: A;
  payload?: T;
}
