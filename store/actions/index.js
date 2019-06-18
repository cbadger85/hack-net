export const INCREMENT = 'INCREMENT';
export const increment = value => ({ type: INCREMENT, payload: { value } });

export const DECREMENT = 'DECREMENT';
export const decrement = value => ({ type: DECREMENT, payload: { value } });
