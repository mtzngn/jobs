import { INCREASE_COUNT, RESET_COUNTER } from "./types";

export const increaseCount = () => {
  return { type: INCREASE_COUNT, payload: 1 };
};

export const resetCounter = () => {
  return { type: RESET_COUNTER };
};
