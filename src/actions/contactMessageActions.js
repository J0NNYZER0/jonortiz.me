import fetch from 'isomorphic-fetch';
import * as fetchTypes from '../constants/fetchTypes';
import * as endpoints from '../constants/endpoints';
import * as config from '../constants/configurations';

const fetching = {
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

const data = {
  detail: (data) => {
    return {
      type: types.CONTACT_MESSAGE.INSERT,
      data
    };
  }
}

const contactMessageInsert = (data) => {
  dispatch(fetching.isInProgress(true));
  return dispatch => {
    fetch(api.HOST + endpoints.CONTACT_MESSAGE.INSERT,
      config.HEADERS.JSON.GET()
    )
    .then(response => {
      if (!response.ok) {
        dispatch(fetching.isError(true))
        throw Error(response.statusText);
      }

      dispatch(fetching.isSuccess(true));
      dispatch(fetching.isInProgress(false));
      return response.json();
    })
    .then(data => {
      dispatch(data.detail(data))
    })
    .catch(() => {
      dispatch(fetching.isError(true))
    });
  };
};



export default {
  insert: contactMessageInsert
};
