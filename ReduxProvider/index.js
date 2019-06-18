import React, { useState, useContext, createContext, useEffect } from 'react';

const Context = createContext();
const { Provider } = Context;

export const useStore = () => {
  const { state } = useContext(Context);

  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);

  return dispatch;
};

export const withContext = Component => props => {
  const context = useContext(Context);
  return <Component {...props} {...context} />;
};

const ReduxProvider = ({ children, store }) => {
  const [state, setState] = useState(store.getState());

  const handleDispatch = action => {
    store.dispatch(action);
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));

    return function cleanup() {
      unsubscribe();
    };
  });

  return (
    <Provider value={{ state, dispatch: handleDispatch }}>{children}</Provider>
  );
};

export default ReduxProvider;
