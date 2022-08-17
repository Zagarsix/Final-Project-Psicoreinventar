import { useEffect, useState, createContext } from "react";
import getState from "./flux";

export const Context = createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js:
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updateStore = {}) =>
          setState({
            store: Object.assign(state.store, updateStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      state.actions.checkAuth();
    }, [state.store]);

    useEffect(() => {
      /**
       * EDIT THIS!
       * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
       * you should do your fetch api requests here. Do not use setState() to save data in the
       * store, instead use actions, like this:
       **/
      state.actions.getDoctors();
      state.actions.getMessage(); // <---- calling this function from the flux.js actions
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
