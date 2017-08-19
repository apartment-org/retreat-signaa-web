import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './component/activity';
import ActivityPanel from './component/activityPanel';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GoogleLogin from 'react-google-login';

const styles = {
  root: {
    overflowY: 'auto',
  },
};

export default class App extends Component {
  render() {
    return (
      <main style={styles.root}>
          <GoogleLogin
            clientId="641565943604-smp76551po7t3nqcr0a6fr8hosa1gl7f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess="Login Successful"
            onFailure="Login Failed"
          />
          <ActivityPanel>
            <Activity classes="fa fa-gamepad" id="activity-game"/>
            <Activity classes="fa fa-address-book" id="activity-address"/>
            <Activity classes="fa fa-meetup" id="activity-meetup"/>
            <Activity classes="fa fa-bicycle" id="activity-bicycle"/>
            <Activity classes="fa fa-windows" id="activity-windows"/>
          </ActivityPanel>
      </main>
    );
  }
}
