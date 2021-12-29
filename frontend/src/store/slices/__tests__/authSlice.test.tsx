import auth, {
  initialState,
  loginRequest,
  loginSuccess,
  loginFailure,
  checkAuthRequest,
  checkAuthSuccess,
  checkAuthFailure,
} from '../authSlice';

const payload = {
  first_name: 'Admin',
  last_name: 'Smith',
  email: 'admin@gmail.com',
  password: 'Admin123!',
};

describe('Auth reducer and actions', () => {
  test('should handle initial state', () => {
    expect(auth(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle loginRequest', () => {
    expect(
      auth(initialState, {
        type: loginRequest.type,
      }),
    ).toEqual({
      ...initialState,
      loginLoading: true,
    });
  });

  test('should handle loginSuccess', () => {
    expect(
      auth(
        {
          ...initialState,
          loginLoading: true,
          isAuthenticated: false,
        },
        {
          type: loginSuccess.type,
          payload,
        },
      ),
    ).toEqual({
      ...initialState,
      loginLoading: false,
      isAuthenticated: true,
      response: payload,
    });
  });

  test('should handle loginFailure', () => {
    expect(
      auth(
        {
          ...initialState,
          loginLoading: false,
          isAuthenticated: false,
          response: payload,
        },
        {
          type: loginFailure.type,
          payload: 'Error string',
        },
      ),
    ).toEqual({
      ...initialState,
      error: 'Error string',
    });
  });

  test('should handle checkAuthRequest', () => {
    expect(
      auth(initialState, {
        type: checkAuthRequest.type,
      }),
    ).toEqual({
      ...initialState,
      checkAuthLoading: true,
    });
  });

  test('should handle checkAuthSuccess', () => {
    expect(
      auth(
        {
          ...initialState,
          checkAuthLoading: true,
          isAuthenticated: false,
        },
        {
          type: checkAuthSuccess.type,
          payload,
        },
      ),
    ).toEqual({
      ...initialState,
      checkAuthLoading: false,
      isAuthenticated: true,
      response: payload,
    });
  });

  test('should handle checkAuthFailure', () => {
    expect(
      auth(
        {
          ...initialState,
          checkAuthLoading: false,
          isAuthenticated: false,
          response: payload,
        },
        {
          type: checkAuthFailure.type,
          payload: 'Error string',
        },
      ),
    ).toEqual({
      ...initialState,
      checkAuthError: 'Error string',
    });
  });
});
