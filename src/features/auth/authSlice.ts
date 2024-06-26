import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginModel, LoginState } from "./types";
import http from "../../common/utils/api";
import createBaseSlice from "../../network/reducers/core/BaseSlice";

const initalState: LoginState = {
  result: {
    status: "idle",
    statusCode: 0,
    message: "",
    token: "",
    username: ""
  },
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async (model: LoginModel) => {
    const response = await http.post("/auth/login", model);
    return response.data;
  }
);
export const authRegister = createAsyncThunk("auth/register", async (model: LoginModel) => {
  const response = await http.post("/auth/register", model);
  return response.data;
});
// export const addUser = createAsyncThunk("auth/addUser", async (user: Users) => {
//   const response = await userService.add(user);
//   return response.data;
// });

export const authLogout = createAsyncThunk("auth/logout", async () => {
  return null;
});

const authSlice = createBaseSlice<LoginState>("auth", initalState, [
  {
    thunk: authLogin,
    onFulfilled: (state, action) => {
      state.result = action.payload;
    },
  },
  {
    thunk: authLogout,
    onFulfilled: (state, action) => {
      state = action.payload;
    },
  },
  {
    thunk: authRegister,
    onFulfilled: (state, action) => {
      state.result = action.payload;
    },
  },
]);

export default authSlice.reducer;