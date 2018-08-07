import * as types from '../constants/actionTypes';

const carouselList = (value) => {
  return (dispatch) => {
    return dispatch({ type: types.UI.CAROUSEL.LIST, value: value });
  };
};

const carouselIsLoaded = (value) => {
  return (dispatch) => {
    return dispatch({ type: types.UI.CAROUSEL.IS_LOADED, value: value });
  };
};

const carouselSlide = (value) => {
  return (dispatch) => {
    return dispatch({ type: types.UI.CAROUSEL.SLIDE, value: value });
  };
};

const isLoaded = (value) => {
  return (dispatch) => {
    return dispatch({ type: types.UI.IS_LOADED, value: value });
  };
};

const toggle = (value) => {
  return (dispatch) => {
    return dispatch({ type: types.UI.TOGGLE, value });
  };
};

export {
  carouselList,
  carouselIsLoaded,
  carouselSlide,
  isLoaded,
  toggle
};
