import {SET_LOADING, LOGS_ERROR, SEARCH_LOGS} from '../actions/types'

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
  };

  export default (state = initialState, action) => {
      switch (action.type){
        case SET_LOADING:
            return {
              ...state,
              loading: true
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
                };
          default:
              return state
      }
  }