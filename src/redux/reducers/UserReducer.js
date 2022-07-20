import { LOGIN_USER, LOGOUT_USER, GET_USER } from "../constantes/Actions-Type";

const User = {
  name: null,
  email: null,
  password: null,
  isLoggedIn: false,
};

const UserReducer = (state = User, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false, email: null, password: null };
    case LOGIN_USER:
      console.log(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password : action.payload.password
      };
  }

  return state;
};

export default UserReducer;
