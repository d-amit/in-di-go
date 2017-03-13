import constants from './constants';

const initialState = {
  view : 'HOME', // initial state
  form : {
    name : '',
    email: '',
    phone: '',
    details : '',
    error : '',
    sent: false
  }
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.activeView:
      return {
        view : action.view
      };
    default:
      return state;
  }
};
