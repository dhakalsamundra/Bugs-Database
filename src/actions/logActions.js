import {SET_LOADING, SEARCH_LOGS, LOGS_ERROR} from './types'

// Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };

  export const searchLogs = text => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
  
      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };