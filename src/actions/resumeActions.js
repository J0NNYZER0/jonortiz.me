import fetch from 'isomorphic-fetch';
import * as fetchTypes from '../constants/fetchTypes';
import * as endpoints from '../constants/endpoints';
import * as config from '../constants/configurations';

const _fetch = {
  isError: (bool) => {

    return {
      type: types.FETCH.IS_ERROR,
      error: bool
    };
  },
  isSuccess: (bool) => {

    return {
      type: types.FETCH.IS_SUCCESS,
      success: bool
    };
  },
  isInProgress: (bool) => {

    return {
      type: types.FETCH.IS_IN_PROGRESS,
      wating: bool
    };
  }
}

const _data = {
  detail: (data) => {
    return {
      type: types.RESUME.DETAIL,
      data
    };
  }
}

const resumeDetail = (data) => {
  dispatch(fetch.isInProgress(true));
  return dispatch => {
    fetch(config.HOST + endpoints.RESUME.DETAIL,
      config.HEADERS.JSON.GET()
    )
    .then(response => {
      if (!response.ok) {
        dispatch(fetch.isError(true))
        throw Error(response.statusText);
      }

      dispatch(fetch.isSuccess(true));
      dispatch(fetch.isInProgress(false));
      return response.json();
    })
    .then(data => {
      dispatch(_data.detail(data))
    })
    .catch(() => {
      dispatch(fetch.isError(true))
    });
  };
};



export default {
  resumeLoad
};
