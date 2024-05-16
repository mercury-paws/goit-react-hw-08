import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseUrl = "https://connections-api.herokuapp.com/";

// POST - register @ /users/signup

export const register = createAsyncThunk("auth/register", async () => {});

// POST - login @ /users/login

export const logIn = createAsyncThunk("auth/login", async () => {});

// POST - logout @ /users/logout

export const logOut = createAsyncThunk("auth/logout", async () => {});

// POST - refresh

// export const refresh = createAsyncThunk("auth/refresh", async () => {});
