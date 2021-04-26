import { DECREASE_COUNTER, INCREASE_COUNTER } from "../actions/types";

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  console.log(state, action.payload);
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, count: state.count + action.payload };

    case DECREASE_COUNTER:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}
