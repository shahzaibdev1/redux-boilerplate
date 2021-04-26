import { DECREASE_COUNTER, INCREASE_COUNTER } from "./types";

export const increaseCounter = (payload, history) => {
  console.log(payload);
  return {
    type: INCREASE_COUNTER,
    payload,
  };
};

export const decreaseCounter = (payload, history) => {
  return {
    type: DECREASE_COUNTER,
    payload,
  };
};
