import { createContext, useReducer } from "react";
import {
  getAuthDataFromLocalStorage,
  saveAuthDataLocalStorage,
} from "../utils";

const AuthContext = createContext(null);

const initialState = {
  loading: false,
  error: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      saveAuthDataLocalStorage(action.payload);
      return { ...state, user: action.payload };
    case actionTypes.LOG_OUT:
      saveAuthDataLocalStorage();
      return { ...initialState };
    default: {
      return state;
    }
  }
}

function AuthProvider({ children }) {
  const user = getAuthDataFromLocalStorage();
  const [state, dispatch] = useReducer(
    AuthReducer,
    user
      ? {
          ...initialState,
          user: user,
        }
      : initialState
  );

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

const actionTypes = {
  LOGIN: "LOGIN",
  LOG_OUT: "LOG_OUT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

function handleLogin(data) {
  return {
    type: actionTypes.LOGIN,
    payload: data,
  };
}

function handleLogout() {
  return {
    type: actionTypes.LOG_OUT,
  };
}

function handleSetLoading(data) {
  return {
    type: actionTypes.LOG_OUT,
    payload: data,
  };
}

function handleSetError(data) {
  return {
    type: actionTypes.LOG_OUT,
    payload: data,
  };
}

export {
  AuthProvider,
  AuthContext,
  handleLogin,
  handleLogout,
  handleSetError,
  handleSetLoading,
};
