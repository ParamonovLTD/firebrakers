import React, { memo, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import Footer from './shared/components/Footer';

import { PrivateComponent } from './pages/PrivateComponent';
import { Header } from './shared/components/Header';



import NotFoundPage from './pages/NotFoundPage';


const App: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/" component={PrivateComponent} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default memo(App);
