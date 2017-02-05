import { SCROLL_TO } from '../constants';

export const scrollTo = (targetName) => {
  return {
    type: SCROLL_TO,
    targetName
  }
}
