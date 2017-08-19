import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './component/activity';
import ActivityPanel from './component/activityPanel';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  root: {
    overflowY: 'auto',
  },
};

export default class App extends Component {
  render() {
    return (
      <main style={styles.root}>
          <ActivityPanel>
            <Activity classes="fa fa-gamepad"/>
            <Activity classes="fa fa-address-book"/>
            <Activity classes="fa fa-meetup"/>
            <Activity classes="fa fa-bicycle"/>
            <Activity classes="fa fa-windows"/>
          </ActivityPanel>
      </main>
    );
  }
}
