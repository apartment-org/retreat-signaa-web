import React, {PureComponent, PropTypes} from 'react';
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import {green100, green500, green700} from 'material-ui/styles/colors';

/* eslint-disable */

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green100,
  },
});

export default class checkbox extends PureComponent {
  
  state = {
    checked: this.props.checked,
  }

  changeHandler(evt) {
    this.props.toggleChecked(evt);
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Checkbox
            id={this.props.id}
            label="Simple with controlled value"
            checked={this.state.checked}
            onCheck={this.changeHandler.bind(this)}
          />
      </MuiThemeProvider>
    );
  }

}