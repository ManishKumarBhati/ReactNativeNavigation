export const incNumber = num => {
  return {type: 'Increment', incrementBy: num};
};

export const decNumber = () => {
  return {type: 'Decrement'};
};
