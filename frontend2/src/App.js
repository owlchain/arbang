import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grommet, Box } from 'grommet';
import { grommet as grommetTheme } from 'grommet/themes';
import Header from './components/Header';
import Landing from './pages/Landing';
import GameDetail from './pages/GameDetail';
import RankingMain from './pages/RankingMain';
import AccountMain from './pages/AccountMain';
import BosInOutMain from './pages/BosInOutMain';
import NotFound from './pages/NotFound';

/* eslint-disable */
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <BrowserRouter>
        <Grommet theme={grommetTheme} full>
          <Box fill overflow="auto">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/account" component={AccountMain} />
              <Route exact path="/ranking" component={RankingMain} />
              <Route exact path="/boscoin" component={BosInOutMain} />
              <Route path="/game" component={GameDetail} />
              <Route path="/game/:gameId" component={GameDetail} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </Box>
        </Grommet>
      </BrowserRouter>
    );
  }
}

const { bool } = PropTypes;

const mapStateToProps = state => ({
  checked: state.account.checked,
  authenticated: state.account.authenticate,
});

export default connect(mapStateToProps)(App);
