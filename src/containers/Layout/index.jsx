import React from 'react';
import { Route } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';
import HomePage from '../Match/HomePage/HomePage';
import MatchPage from '../Match/MatchPage/MatchPage';
import ResultPage from '../Match/ResultPage/ResultPage';

const Layout = () => {
  return (
    <div>
      <TopNav />
      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/match" component={MatchPage} />
        <Route exact path="/result" component={ResultPage} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
