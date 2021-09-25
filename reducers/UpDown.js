const initialState = 0;
const changeNo = (state = initialState, action) => {
  if (action.type === 'Increment') {
    return state + action.incrementBy;
  } else if (action.type === 'Decrement') {
    return state - 1;
  } else {
    return state;
  }
};
export default changeNo;
