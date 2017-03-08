import constants from './constants';

export const actions = {
  getActiveView(view) {
    return {
      type: constants.activeView,
      view
    }
  }
}
