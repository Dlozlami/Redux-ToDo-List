import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    password: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    list: [],
  },
  validPwd: true,
  validUsername: true,
};

export const validateUser = createAsyncThunk(
  'login/validateUser',
  async ([username, password], thunkAPI) => {
    const url = `http://localhost:4000/accounts/${username}`;

    try {
      const resp = await axios.get(url);

      // Retrieve the stored password from the response data
      const storedPassword = resp.data.password;
      thunkAPI.dispatch(setValidUsername(true));
      // Compare the password provided by the user with the stored password
      if (password !== storedPassword) {
        // Update the state to indicate an invalid password
        thunkAPI.dispatch(setValidPwd(false));

        // Return early or perform additional logic if needed
        return;
      }

      // Make the API request if the password is valid
      return resp.data;
    } catch (error) {
      thunkAPI.dispatch(setValidUsername(false));
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearState: (state, { payload }) => {
      console.log(payload);
      state.userData = {
        id: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        phone: "",
        list: [],
      };
    },

    setValidPwd: (state, { payload }) => {
      state.validPwd = payload;
    },

    setValidUsername: (state, { payload }) => {
      state.validUsername = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateUser.fulfilled, (state, action) => {
        console.log(action);
        state.userData = action.payload;
      });
  },
});

export const {
  clearState,
  setValidPwd,
  setValidUsername, // Include setValidUsername action
} = loginSlice.actions;

export default loginSlice.reducer;
