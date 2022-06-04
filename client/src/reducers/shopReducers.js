import {
    SHOP_UPDATE_REQUEST,
    SHOP_UPDATE_SUCCESS,
    SHOP_UPDATE_FAIL,
    SHOP_CREATE_FAIL,
    SHOP_CREATE_REQUEST,
    SHOP_CREATE_SUCCESS,
    SHOP_DELETE_FAIL,
    SHOP_DELETE_REQUEST,
    SHOP_DELETE_SUCCESS,
    SHOP_LIST_FAIL,
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
  } from "../constants/shopConstants";
  
  export const shopListReducer = (state = { shop: [] }, action) => {
    switch (action.type) {
      case SHOP_LIST_REQUEST:
        return { loading: true };
      case SHOP_LIST_SUCCESS:
        return { loading: false, SHOP: action.payload };
      case SHOP_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const shopCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SHOP_CREATE_REQUEST:
        return { loading: true };
      case SHOP_CREATE_SUCCESS:
        return { loading: false, success: true };
      case SHOP_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const shopDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SHOP_DELETE_REQUEST:
        return { loading: true };
      case SHOP_DELETE_SUCCESS:
        return { loading: false, success: true };
      case SHOP_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  
  export const shopUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case SHOP_UPDATE_REQUEST:
        return { loading: true };
      case SHOP_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case SHOP_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  