import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './component/activity';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

const muiTheme = getMuiTheme({});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

export default class App extends Component {
  render() {
    return (
      <main style={styles.root}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList cellHeight={180} style={styles.gridList}>
            <GridTile>
              <Activity classes="fa fa-gamepad"/>
            </GridTile>
            <GridTile>
              <Activity classes="fa fa-address-book"/>
            </GridTile>
            <GridTile>
              <Activity classes="fa fa-meetup"/>
            </GridTile>
            <GridTile>
              <Activity classes="fa fa-bicycle"/>
            </GridTile>
            <GridTile>
              <Activity classes="fa fa-windows"/>
            </GridTile>
          </GridList>
        </MuiThemeProvider>
      </main>
    );
  }
}
