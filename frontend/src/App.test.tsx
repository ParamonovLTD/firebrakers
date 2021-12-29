import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

import { store } from './store/store';
import App from './App';

test('renders Main page', () => {

  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText('Login')).toBeInTheDocument();
});
