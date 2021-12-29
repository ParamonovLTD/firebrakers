import profile, {
  initialState,
  editProfileDataRequest,
  editProfileDataSuccess,
  editProfileDataFailure,
  getProfileDataRequest,
  getProfileDataSuccess,
  getProfileDataFailure,
} from '../profileSlice';

const payload = {
  first_name: 'Admin',
  last_name: 'Smith',
  email: 'admin@gmail.com',
  password: 'Admin123!',
};

describe('Auth reducer and actions', () => {
  test('should handle initial state', () => {
    expect(profile(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle editProfileDataRequest', () => {
    expect(
      profile(initialState, {
        type: editProfileDataRequest.type,
      }),
    ).toEqual({
      ...initialState,
      editLoading: true,
    });
  });

  test('should handle editProfileDataSuccess', () => {
    expect(
      profile(
        {
          ...initialState,
          editLoading: true,
        },
        {
          type: editProfileDataSuccess.type,
          payload,
        },
      ),
    ).toEqual({
      ...initialState,
      editLoading: false,
      response: payload,
    });
  });

  test('should handle editProfileDataFailure', () => {
    expect(
      profile(
        {
          ...initialState,
          editLoading: false,
          response: payload,
        },
        {
          type: editProfileDataFailure.type,
          payload: 'Error string',
        },
      ),
    ).toEqual({
      ...initialState,
      editError: 'Error string',
    });
  });

  test('should handle getProfileDataRequest', () => {
    expect(
      profile(initialState, {
        type: getProfileDataRequest.type,
      }),
    ).toEqual({
      ...initialState,
      getProfileLoading: true,
    });
  });

  test('should handle getProfileDataSuccess', () => {
    expect(
      profile(
        {
          ...initialState,
          getProfileLoading: true,
        },
        {
          type: getProfileDataSuccess.type,
          payload,
        },
      ),
    ).toEqual({
      ...initialState,
      getProfileLoading: false,
      response: payload,
    });
  });

  test('should handle getProfileDataFailure', () => {
    expect(
      profile(
        {
          ...initialState,
          getProfileLoading: false,
          response: payload,
        },
        {
          type: getProfileDataFailure.type,
          payload: 'Error string',
        },
      ),
    ).toEqual({
      ...initialState,
      getProfileError: 'Error string',
    });
  });
});
