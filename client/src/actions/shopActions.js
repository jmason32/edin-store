import {
    SHOP_CREATE_FAIL,
    SHOP_CREATE_REQUEST,
    SHOP_CREATE_SUCCESS,
    SHOP_DELETE_FAIL,
    SHOP_DELETE_REQUEST,
    SHOP_DELETE_SUCCESS,
    SHOP_LIST_FAIL,
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
    SHOP_UPDATE_FAIL,
    SHOP_UPDATE_REQUEST,
    SHOP_UPDATE_SUCCESS,
  } from "../constants/shopConstants";
  import axios from "axios";

  const shopURL = "http://localhost:8080/shops"
  
  export const listShops = () => async (dispatch, getState) => {

    console.log("hello")
    try {
      dispatch({
        type: SHOP_LIST_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(shopURL, config);
  
      dispatch({
        type: SHOP_LIST_SUCCESS,
        payload: data,
      });
      console.log(data)
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SHOP_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  export const createNoteAction = (title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: SHOP_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/shop/create`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: SHOP_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SHOP_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SHOP_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/shop/${id}`, config);
  
      dispatch({
        type: SHOP_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SHOP_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateNoteAction = (id, title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: SHOP_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/shop/${id}`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: SHOP_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SHOP_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  