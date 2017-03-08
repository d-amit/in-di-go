import constants from './constants';

const initialState = {
  view : 'HOME' // initial state
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
