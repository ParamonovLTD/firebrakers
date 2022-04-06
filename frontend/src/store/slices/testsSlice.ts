import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { axiosInstance } from '../../core/axios';
import {
  CreateTestData,
  CreateTestResponse,
  ITest, SetTestResultData, SetTestResultResponse,
  UpdateTestData, UpdateTestResponse
} from '../../interfaces/Test';
import { notification } from 'antd';

export interface AuthState {
  tests: ITest[];
  testsLoading: boolean;
  testsError: string;

  createTestLoading: boolean;
  createTestError: string;

  updateTestLoading: boolean;
  updateTestError: string;

  deleteTestLoading: boolean;
  deleteTestError: string;

  setTestResultLoading: boolean;
  setTestResultError: string;
}

export const initialState: AuthState = {
  tests: [],
  testsLoading: false,
  testsError: '',

  createTestLoading: false,
  createTestError: '',

  updateTestLoading: false,
  updateTestError: '',

  deleteTestLoading: false,
  deleteTestError: '',

  setTestResultLoading: false,
  setTestResultError: '',
};

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    createTestRequest: (state) => {
      state.createTestLoading = true;
    },
    createTestSuccess: (state) => {
      state.createTestLoading = false;
    },
    createTestFailure: (state, action: PayloadAction<string>) => {
      state.createTestLoading = false;
      state.createTestError = action.payload;
    },

    getTestsRequest: (state) => {
      state.testsLoading = true;
    },
    getTestsSuccess: (state, action: PayloadAction<ITest[]>) => {
      state.testsLoading = false;
      state.tests = action.payload
    },
    getTestsFailure: (state, action: PayloadAction<string>) => {
      state.testsLoading = false;
      state.testsError = action.payload;
    },

    updateTestRequest: (state) => {
      state.updateTestLoading = true;
    },
    updateTestSuccess: (state) => {
      state.updateTestLoading = false;
    },
    updateTestFailure: (state, action: PayloadAction<string>) => {
      state.updateTestLoading = false;
      state.updateTestError = action.payload;
    },

    deleteTestRequest: (state) => {
      state.deleteTestLoading = true;
    },
    deleteTestSuccess: (state) => {
      state.deleteTestLoading = false;
    },
    deleteTestFailure: (state, action: PayloadAction<string>) => {
      state.deleteTestLoading = false;
      state.deleteTestError = action.payload;
    },

    setTestResultRequest: (state) => {
      state.setTestResultLoading = true;
    },
    setTestResultSuccess: (state) => {
      state.setTestResultLoading = false;
    },
    setTestResultFailure: (state, action: PayloadAction<string>) => {
      state.setTestResultLoading = false;
      state.setTestResultError = action.payload;
    },
  },
});

export const {
  createTestRequest,
  createTestSuccess,
  createTestFailure,

  getTestsRequest,
  getTestsSuccess,
  getTestsFailure,

  updateTestRequest,
  updateTestSuccess,
  updateTestFailure,

  deleteTestRequest,
  deleteTestSuccess,
  deleteTestFailure,

  setTestResultRequest,
  setTestResultSuccess,
  setTestResultFailure,
} = testsSlice.actions;

export const createTest = (createTestData: CreateTestData): AppThunk => async (
  dispatch,
) => {
  dispatch(createTestRequest());
  try {
    const res = await axiosInstance.post<CreateTestResponse>('/tests', createTestData);
    dispatch(createTestSuccess());
    notification.success({message: 'Тест успешно добавлен!'})
  } catch {
    console.log('не удалось создать тест');
    dispatch(createTestFailure('Tests create error'));
  }
};

export const getAllTests = (): AppThunk => async (
  dispatch,
) => {
  dispatch(getTestsRequest());
  try {
    const res = await axiosInstance.get<ITest[]>('/tests');
    dispatch(getTestsSuccess(res.data));
  } catch {
    console.log('тесты не получены ');
    dispatch(getTestsFailure('Tests fetch error'));
  }
};

export const getTestById = (id: string): any => async (
  dispatch: any,
  getState: any
)  => {
  const state = getState()
  return await state.tests.tests.find((test: ITest) => test._id === id)
};

export const updateTest = (updateTestData: UpdateTestData): AppThunk => async (
  dispatch,
) => {
  dispatch(updateTestRequest());
  try {
    const res = await axiosInstance.put<UpdateTestResponse>('/tests', updateTestData, {params: {id: updateTestData.id}});
    dispatch(updateTestSuccess());
    notification.success({message: 'Тест успешно обновлён!'})
  } catch {
    console.log('тест не обновлён ');
    dispatch(updateTestFailure("Test didn't update"));
  }
};

export const deleteTest = (id: string): AppThunk => async (
  dispatch,
) => {
  dispatch(deleteTestRequest());
  try {
    const res = await axiosInstance.delete<string>('/tests', {params: {id}});
    dispatch(deleteTestSuccess());
  } catch {
    console.log('тест не удалён');
    dispatch(deleteTestFailure("Tests didn't delete"));
  }
};

export const getResults = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  const state = getState()
  const tests: ITest[] = state.tests.tests

  return tests.find(test => test._id === id)?.results
};

export const setTestResult = (testId: string, setTestResultData: SetTestResultData): AppThunk => async (
  dispatch,
) => {
  dispatch(setTestResultRequest());
  try {
    const res = await axiosInstance.patch<SetTestResultResponse>(`/tests/results/${testId}`, setTestResultData);
    dispatch(setTestResultSuccess());
    notification.success({message: 'Тест пройден!'})
  } catch {
    console.log('Результаты не были отправлены');
    dispatch(setTestResultFailure("Test didn't update"));
  }
};



// SELECTORS
export const allTestsSelector = (state: RootState) =>
  state.tests.tests

export const testByIdSelector = createSelector(
  [
    (state: RootState) => state.tests.tests,
    (state: RootState, id: string) => id
  ],
  (tests, id): ITest => tests.filter(test => test._id === id)[0]
);


export default testsSlice.reducer;
