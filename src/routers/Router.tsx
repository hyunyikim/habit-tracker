import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from 'components/layout/Header';
import Graph from 'components/graph/Graph';
import Diary from 'components/diary/Diary';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path='/graph' component={Graph} />
          <Route exact={true} path='/diary' component={Diary} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
