import { INCREASE_COUNT, RESET_COUNTER } from "../actions/types";

const INITIAL_STATE = {
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload };
    case RESET_COUNTER:
      return { count: 0 };
    default:
      return state;
  }
};
