import _ from "lodash";
import { LIKE_JOB, CLEAR_LIKED_JOBS } from "../actions/types";

const INITIAL_STATE = {
  hello: "hello",
  likedJob: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIKE_JOB:
      return { ...state, likedJob: [...state.likedJob, action.payload] };
    case CLEAR_LIKED_JOBS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
