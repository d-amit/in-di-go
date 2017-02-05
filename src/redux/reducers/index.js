import { SCROLL_TO } from '../constants';

const homeReducer = (state = {}, action) => {
  switch (action.type) {

    case SCROLL_TO:
      return {
        targetName: action.targetName
      }

    default:
      return state

  }
}

export default homeReducer;
