import fetch from 'isomorphic-fetch';
import * as fetchTypes from '../constants/fetchTypes';
import * as endpoints from '../constants/endpoints';
import * as config from '../constants/configurations';

const _fetch = {
  isError: (bool) => {

    return {
      type: fetchTypes.FETCH.IS_ERROR,
      error: bool
    };
  },
  isSuccess: (bool) => {

    return {
      type: fetchTypes.FETCH.IS_SUCCESS,
      success: bool
    };
  },
  isInProgress: (bool) => {

    return {
      type: fetchTypes.FETCH.IS_IN_PROGRESS,
      wating: bool
    };
  }
}

const _data = {
  insert: (data) => {
    return {
      type: fetchTypes.CONTACT_MESSAGE.INSERT,
      data
    };
  }
}

const contactMessageInsert = (data) => {
  dispatch(_fetch.isInProgress(true));
  return dispatch => {
    fetch(config.HOST + endpoints.CONTACT_MESSAGE.INSERT,
      config.HEADERS.JSON.GET()
    )
    .then(response => {
      if (!response.ok) {
        dispatch(_fetch.isError(true))
        throw Error(response.statusText);
      }

      dispatch(_fetch.isSuccess(true));
      dispatch(_fetch.isInProgress(false));
      return response.json();
    })
    .then(data => {
      dispatch(_data.insert(data))
    })
    .catch(() => {
      dispatch(_fetch.isError(true))
    });
  };
};



export default {
  insert: contactMessageInsert
};
