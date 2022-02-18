/* eslint-disable @typescript-eslint/indent */
import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import dayjs from 'dayjs';
import { AppThunk, RootState } from '../store';
import { axiosInstance } from '../../core/axios';

export interface AccountState {

}

export const initialState: AccountState = {

};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {

  },
});

export const {

} = accountSlice.actions;


export default accountSlice.reducer;
