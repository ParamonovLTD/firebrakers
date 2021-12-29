/* eslint-disable @typescript-eslint/indent */
import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import dayjs from 'dayjs';
import { AppThunk, RootState } from '../store';
import { axiosInstance } from '../../core/axios';

export interface GetSearchAccountParamsInterface {
  city?: string;
  country?: string;
  state?: string;
}
export interface AccountState {
  accountReviewsLoading: boolean;
  accountReviewsError: string | null;
  accountReviews: any;

  updateAccountStatusCode: number;
  updateAccountDataLoading: boolean;
  updateAccountDataError: string | null;

  updateSellerStatusCode: number;
  updateSellerLoading: boolean;
  updateSellerError: string | null;

  sellerVerificationLoading: boolean;
  sellerVerification: any;

  filters: {
    country?: string;
    state?: string;
    city?: string;
  };

  businessSellerLoading: boolean;
  BusinessSeller: any;

  sellerLoading: boolean;
  seller: any;

  currentCategory: number;
  sellerOptionalLoading: boolean;
  sellerOptional: any;

  buyerAddress: any;
  buyerAddressLoading: boolean;
  currency: string;
  minMaxPrice: [number, number];

  allSellersLoading: boolean;
  allSellers: any;

  oneSeller: any;
  oneSellerLoading: boolean;

  getTotalBuyersAndSellersCountLoading: boolean;
  getTotalSellersCount: any;
  getTotalBuyersCount: any;
  getTotalBuyersAndSellersCountError: string | null;
}

export const initialState: AccountState = {
  updateAccountStatusCode: 0,
  updateAccountDataLoading: false,
  updateAccountDataError: null,

  updateSellerStatusCode: 0,
  updateSellerLoading: false,
  updateSellerError: null,

  accountReviewsLoading: false,
  accountReviewsError: null,
  accountReviews: null,
  sellerVerificationLoading: false,
  sellerVerification: {},

  filters: {},

  sellerLoading: false,
  seller: {},

  currentCategory: 0,
  businessSellerLoading: false,
  BusinessSeller: {},

  sellerOptionalLoading: false,
  sellerOptional: {},

  allSellersLoading: false,
  allSellers: [],

  buyerAddress: [],
  buyerAddressLoading: false,

  oneSeller: [],
  oneSellerLoading: false,

  currency: 'S$',
  minMaxPrice: [0, 0],

  getTotalBuyersAndSellersCountLoading: false,
  getTotalBuyersCount: 0,
  getTotalSellersCount: 0,
  getTotalBuyersAndSellersCountError: null,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },

    setUpdateAccountStatusCode: (state, action) => {
      state.updateAccountStatusCode = action.payload;
    },

    updateAccountDataRequest: (state) => {
      state.updateAccountDataLoading = true;
    },
    updateAccountDataSuccess: (state, action) => {
      state.updateAccountDataLoading = false;
      state.updateAccountStatusCode = action.payload.statusCode;
      state.updateAccountDataError = null;
    },
    updateAccountDataFailure: (state, action) => {
      state.updateAccountDataLoading = false;
      state.updateAccountStatusCode = 0;
      state.updateAccountDataError = action.payload;
    },

    updateSellerRequest: (state) => {
      state.updateSellerLoading = true;
    },
    updateSellerSuccess: (state, action) => {
      state.updateSellerLoading = false;
      state.updateSellerStatusCode = action.payload.statusCode;
      state.updateSellerError = null;
    },
    updateSellerFailure: (state, action) => {
      state.updateSellerLoading = false;
      state.updateSellerStatusCode = 0;
      state.updateSellerError = action.payload;
    },

    getSellerVerificationRequest: (state) => {
      state.sellerVerificationLoading = true;
    },
    getSellerVerificationSuccess: (state, action) => {
      state.sellerVerificationLoading = false;
      state.sellerVerification = action.payload.business;
    },
    getSellerVerificationFailure: (state) => {
      state.sellerVerificationLoading = false;
    },
    accountReviewsRequest: (state) => {
      state.accountReviewsLoading = true;
    },
    accountReviewsSuccess: (state, action) => {
      state.accountReviews = action.payload;
      state.accountReviewsLoading = false;
    },
    accountReviewsFailure: (state, action) => {
      state.accountReviewsLoading = false;
      state.accountReviewsError = action.payload;
    },
    getBusinessSellerRequest: (state) => {
      state.businessSellerLoading = true;
    },
    getBusinessSellerSuccess: (state, action) => {
      state.businessSellerLoading = false;
      state.BusinessSeller = action.payload.business;
    },
    getBusinessSellerFailure: (state) => {
      state.businessSellerLoading = false;
    },

    getSellerBusinessRequest: (state) => {
      state.sellerLoading = false;
    },
    getSellerBusinessSuccess: (state, action) => {
      state.sellerLoading = false;
      state.seller = action.payload.seller;
    },
    getSellerBusinessFailure: (state) => {
      state.sellerLoading = false;
    },

    getBuyerAddressRequest: (state) => {
      state.buyerAddressLoading = false;
    },
    getBuyerAddressSuccess: (state, action) => {
      state.buyerAddressLoading = false;
      state.buyerAddress = action.payload;
    },
    getBuyerAddressFailure: (state) => {
      state.buyerAddressLoading = false;
    },

    getSellerOptionalInfoRequest: (state) => {
      state.sellerOptionalLoading = false;
    },
    getSellerOptionalInfoSuccess: (state, action) => {
      state.sellerOptionalLoading = false;
      state.sellerOptional = action.payload.businessInformation;
    },
    getSellerOptionalInfoFailure: (state) => {
      state.sellerOptionalLoading = false;
    },
    setAccountCurrency: (state, action) => {
      state.currency = action.payload;
    },

    getMinMaxSellerPriceSuccess: (state, action) => {
      state.minMaxPrice = action.payload;
    },

    getAllSellersRequest: (state) => {
      state.allSellersLoading = true;
    },
    getAllSellersSuccess: (state, action) => {
      state.allSellersLoading = false;
      state.allSellers = action.payload;
    },
    getAllSellersFailure: (state) => {
      state.allSellersLoading = false;
    },

    getOneSellerRequest: (state) => {
      state.oneSellerLoading = true;
    },
    getOneSellerSuccess: (state, action) => {
      state.oneSellerLoading = false;
      state.oneSeller = [action.payload];
    },
    getOneSellerFailure: (state) => {
      state.oneSeller = false;
    },

    getTotalBuyersAndSellersCountRequest: (state) => {
      state.getTotalBuyersAndSellersCountLoading = true;
    },
    getTotalBuyersAndSellersCountSuccess: (state, action) => {
      state.getTotalBuyersAndSellersCountLoading = false;
      state.getTotalBuyersCount = action.payload.usersCount.count;
      state.getTotalSellersCount = action.payload.sellersCount.count;
    },
    getTotalBuyersAndSellersCountFailure: (state) => {
      state.getTotalBuyersAndSellersCountLoading = false;
    },

    setAccountFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearAccountFilters: (state) => {
      state.filters = {};
    },
  },
});

export const {
  getTotalBuyersAndSellersCountRequest,
  getTotalBuyersAndSellersCountSuccess,
  getTotalBuyersAndSellersCountFailure,

  setCurrentCategory,
  setUpdateAccountStatusCode,
  setAccountCurrency,

  updateAccountDataRequest,
  updateAccountDataSuccess,
  updateAccountDataFailure,

  updateSellerRequest,
  updateSellerSuccess,
  updateSellerFailure,

  accountReviewsRequest,
  accountReviewsSuccess,
  accountReviewsFailure,

  getSellerVerificationRequest,
  getSellerVerificationSuccess,
  getSellerVerificationFailure,

  getSellerBusinessRequest,
  getSellerBusinessSuccess,
  getSellerBusinessFailure,

  getBusinessSellerRequest,
  getBusinessSellerSuccess,
  getBusinessSellerFailure,

  getSellerOptionalInfoRequest,
  getSellerOptionalInfoSuccess,
  getSellerOptionalInfoFailure,

  getBuyerAddressRequest,
  getBuyerAddressSuccess,
  getBuyerAddressFailure,

  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellersFailure,

  getOneSellerRequest,
  getOneSellerSuccess,
  getOneSellerFailure,

  getMinMaxSellerPriceSuccess,

  setAccountFilters,
  clearAccountFilters,
} = accountSlice.actions;

export const getAllBuyers = (): AppThunk => async (dispatch) => {
  try {
    const res = await axiosInstance.get('/accounts/count_buyers');
    dispatch(getTotalBuyersAndSellersCountSuccess(res.data));
  } catch (error) {
    console.log('get data count sellers/buyers error', error);
  }
};

export const updateOneSeller = (formData: FormData, id: number | undefined): AppThunk => async (
  dispatch,
) => {
  dispatch(updateSellerRequest());
  try {
    const res = await axiosInstance.put('/accounts/seller_profile', formData, { params: { profileId: id }});
    dispatch(updateSellerSuccess(res.data));
  } catch (error: any) {
    dispatch(updateSellerFailure(error.message));
  }
};

export const getSellerOptionalInfo = (data: {
  sellerId: number;
  categoryId: number;
}): AppThunk => async (dispatch) => {
  try {
    const { sellerId, categoryId } = data;
    dispatch(getSellerOptionalInfoRequest());
    const res = await axiosInstance.get(`/accounts/${sellerId}/optional_info`, {
      params: { categoryId },
    });
    const { statusCode } = res.data;
    if (statusCode === 200) {
      dispatch(getSellerOptionalInfoSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getSellerOptionalInfoFailure());
  }
};
export const getMinMaxSellerPrice = (data: {
  sellerId: number;
}): AppThunk => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `/listings/minmax_price/seller/${data.sellerId}`,
    );
    const { minFixedPrice, maxFixedPrice } = res.data;
    dispatch(getMinMaxSellerPriceSuccess([minFixedPrice, maxFixedPrice]));
  } catch (error) {
    console.log('getMinMaxPrice', error);
  }
};
export const getSellerBusiness = (data: {
  sellerId: number;
}): AppThunk => async (dispatch) => {
  try {
    const { sellerId } = data;
    dispatch(getSellerBusinessRequest());
    const res = await axiosInstance.get(`/accounts/${sellerId}/seller`);
    const { statusCode } = res.data;
    if (statusCode === 200) {
      dispatch(getSellerBusinessSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getSellerBusinessFailure());
  }
};
export const getInitialSellerBusiness = (data: {
  sellerId: number;
}): AppThunk => async (dispatch) => {
  try {
    const { sellerId } = data;
    dispatch(getSellerBusinessRequest());
    const res = await axiosInstance.get(`/accounts/${sellerId}/seller`);
    const { statusCode, seller } = res.data;
    if (statusCode === 200) {
      dispatch(getSellerBusinessSuccess(res.data));
      const businessInformations = seller.businesses?.length
        ? seller.businesses[0]?.businessInformations
        : {};
      const initialCategory = businessInformations?.length
        ? businessInformations[0]?.category?.id
        : 0;
      dispatch(setCurrentCategory(initialCategory ?? 0));
    }
  } catch (error) {
    console.log(error);
    dispatch(getSellerBusinessFailure());
  }
};
export const getAddressesBuyer = (): AppThunk => async (dispatch) => {
  getBuyerAddressRequest();
  try {
    const res = await axiosInstance.get('/addresses/buyer');
    console.log('UUUUGUUG', res.data);
    dispatch(getBuyerAddressSuccess(res.data.addresses));
  } catch (error) {
    dispatch(getBuyerAddressFailure());
  }
};

export const updateAccountData = (data: any): AppThunk => async (dispatch) => {
  dispatch(updateAccountDataRequest());
  try {
    const res = await axiosInstance.put('/accounts/seller', data);
    if (res.data?.statusCode === 200) {
      dispatch(updateAccountDataSuccess(res.data));
      notification.success({
        message: 'Success!',
        description: res.data.message,
      });
    } else if (res.data?.statusCode === 400) {
      notification.error({ message: 'Error!', description: res.data.message });
    }
  } catch (error) {
    dispatch(updateAccountDataFailure(error.message));
    notification.error({ message: 'Error!', description: error.message });
  }
};

export const getAccountReviews = (data: any): AppThunk => async (dispatch) => {
  dispatch(accountReviewsRequest());
  try {
    const res = await axiosInstance.get(`/reviews/${data}`);
    dispatch(accountReviewsSuccess(res.data.reviews));
    // notification.success({ message: 'Success!', description: res.data.message });
  } catch (error) {
    dispatch(updateAccountDataFailure(error.message));
    notification.error({ message: 'Error!', description: error.message });
  }
};

export const getAllSellers = (): AppThunk => async (dispatch) => {
  dispatch(getAllSellersRequest());
  try {
    const res = await axiosInstance.get('/accounts/sellers');
    if (res.data.statusCode === 200) {
      dispatch(getAllSellersSuccess(res.data.extendedAccount));
    }
  } catch (error) {
    dispatch(getAllSellersFailure());
    notification.error({ message: 'Error!', description: error.message });
  }
};

export const getOneSeller = (id: number | string): AppThunk => async (
  dispatch,
) => {
  dispatch(getOneSellerRequest());
  try {
    const res = await axiosInstance.get(`/accounts/seller/${id}`);
    if (res.data.statusCode === 200) {
      dispatch(getOneSellerSuccess(res.data.business));
    }
  } catch (error) {
    dispatch(getOneSellerFailure());
    notification.error({ message: 'Error!', description: error.message });
  }
};

interface GetSellerVerification {
  accountId?: number;
}
// export const getSellerVerification = ({
//   accountId,
// }: GetSellerVerification): AppThunk => async (dispatch, state) => {
//   dispatch(getSellerVerificationRequest());
//   try {
//     const res = await axiosInstance.get(
//       `/accounts/seller/${accountId ?? state().auth.user?.id}`,
//     );
//     dispatch(getSellerVerificationSuccess(res.data));
//   } catch (error) {
//     dispatch(getSellerVerificationFailure());
//   }
// };
export const deleteOneProfileUserImage = (data: any): AppThunk => async (
  dispatch,
) => {
  try {
    const res = await axiosInstance.delete('/accounts/buyer/image', {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getBusinessSeller = ({
  accountId,
}: GetSellerVerification): AppThunk => async (dispatch) => {
  dispatch(getBusinessSellerRequest());
  try {
    const res = await axiosInstance.get(`/accounts/seller/${accountId}`);
    dispatch(getBusinessSellerSuccess(res.data));
  } catch (error) {
    dispatch(getBusinessSellerFailure());
  }
};
export const accountSelector = (state: RootState) => state.account;

export const sellerSelector = (state: RootState) => state.account.seller;

export const sellerBusinessCategoriesSelector = (state: RootState) => {
  if (state.account.seller?.businesses?.length) {
    const businessInformations = state.account.seller?.businesses?.length
      ? state.account.seller?.businesses[0]?.businessInformations
      : [];
    return businessInformations?.length
      ? businessInformations.map(
          (businessInformation: any) => businessInformation.category,
        )
      : [];
  }
  return [];
};
export const sellerBusinessSelector = (state: RootState) =>
  state.account.seller.businesses?.length
    ? state.account.seller.businesses[0]
    : {};
export const sellerBusinessInformationSelector = (currentCategory: number) => (
  state: RootState,
) => {
  const businessInformations = state.account.seller?.businesses?.length
    ? state.account.seller?.businesses[0]?.businessInformations
    : [];
  return (
    businessInformations?.find(
      (businessInformation: any) =>
        businessInformation.category.id === currentCategory,
    ) ?? {}
  );
};
export const sellerBusinessInformationSubcategoriesSelector = (
  state: RootState,
) => {
  const businessInformations = state.account.seller?.businesses?.length
    ? state.account.seller?.businesses[0]?.businessInformations
    : [];
  return businessInformations?.reduce((acc: any, businessInformation: any) => {
    if (businessInformation?.subcategories?.length) {
      acc.push(...businessInformation.subcategories);
    }
    return acc;
  }, []);
};
export const sellerVerificationSelector = (state: RootState) =>
  state.account.sellerVerification;
export const sellerOptionalPortfoliosSelector = (state: RootState) => {
  const portfolios = state.account.sellerOptional?.portfolios?.length
    ? state.account.sellerOptional.portfolios
    : [];
  return portfolios.map((item: any) => ({
    description: item?.description ?? '',
    url: item?.medias?.length ? item.medias[0]?.url : '',
    mimetype: item?.medias?.length ? item.medias[0]?.url : '',
  }));
};
export const sellerOptionalCertificationsSelector = (state: RootState) => {
  const certifications = state.account.sellerOptional?.certifications?.length
    ? state.account.sellerOptional.certifications
    : [];
  return certifications.map((item: any) => ({
    description: item?.description ?? '',
    url: item?.medias?.length ? item.medias[0]?.url : '',
    mimetype: item?.medias?.length ? item.medias[0]?.url : '',
  }));
};
export const sellerOptionalWorkExperiencesSelector = (state: RootState) =>
  state.account.sellerOptional.workExperiences?.length
    ? state.account.sellerOptional.workExperiences
    : [];
export const accountDataReviewsSelector = (state: RootState) =>
  state.account.accountReviews;
export const currentCategorySelector = (state: RootState) =>
  state.account.currentCategory;

export const accountDataBusinessSellerSelector = (state: RootState) =>
  state.account.BusinessSeller;

export const buyerAddressSelector = (state: RootState) =>
  state.account.buyerAddress;

export const accountCurrencySelector = (state: RootState) =>
  state.account.currency;

export const allSellersSelector = (state: RootState) => {
  if (state.account.allSellers && state.account.allSellers.length) {
    const array = state.account.allSellers.map((seller: any) => ({
      ...seller,
      fullname: `${seller.firstName} ${seller.lastName}`,
      status: seller.isActive ? 'Enabled' : 'Disabled',
      date: dayjs(seller.createdAt).format('h.mm[a.m.] DD/MM/YYYY'),
      key: seller.id,
      serviceType:
        seller.businesses &&
        seller.businesses.length &&
        seller.businesses[0].type === 'company'
          ? 'Company'
          : 'Freelancer',
    }));
    return array;
  }
  return [];
};

export const oneSellerSelector = (state: RootState) => state.account.oneSeller;

export const countSellers = (state: RootState) =>
  state.account.getTotalSellersCount;

export const countBuyers = (state: RootState) =>
  state.account.getTotalBuyersCount;

export default accountSlice.reducer;
