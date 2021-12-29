/* eslint-disable max-len */
export const PHONE_REGEX = /^[+]?[1-9]{1,3}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
// export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z*.,!?@#$%^&(){}[\]:;'"`<>/\\~_+\-=|\d]{6,}$/; // old
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/; // Got from https://ru.stackoverflow.com/questions/533675/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F-%D0%BE%D1%82-6-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D1%81-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC-%D1%86%D0%B8%D1%84%D1%80-%D1%81%D0%BF%D0%B5%D1%86-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE
export const PASSWORD_ERROR = 'Password must contains both lower and upper case characters, at least one number and character symbol and be longer than 8 symbols';
export const CONFIRM_PASSWORD_ERROR = 'The two passwords that you entered do not match!';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const MONTH_AND_YEAR_REGEX = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/;
export const CARD_NUMBER_REGEX = /^(((\d{4}[\s]?){3}\d{4})|([0-9]{16}))$/;
export const CVV_REGEX = /^([0-9]{3})$/;

export const BASE_FILES_URL = process.env.REACT_APP_BASE_FILES_URL || 'https://aladyyn-staging-uploads.s3.amazonaws.com';
export const FALLBACK_IMAGE_URL = process.env.REACT_APP_FALLBACK_IMAGE_URL || 'http://via.placeholder.com/500x500?text=No%20image';

export const STRIPE_PK = process.env.STRIPE_PUBLIC_KEY || 'pk_test_51JY4I5GD8IcoL9YfDA6j1Ql5lON22oalNlU5pdomlNbW7YOMtW4ag2XrWSI0fKSxYWKte4ytIivsqOqm1V6nHCV500axHgim61';