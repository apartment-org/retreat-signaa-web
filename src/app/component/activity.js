import React, {PureComponent, PropTypes} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {green100, green500, green700} from 'material-ui/styles/colors';
import 'font-awesome/css/font-awesome.css';

const buttonStyles = {
  backgroundColor: '#aabbcc',
  width: '100px',
  height: '100px',
};

const iconStyles = {
  fontSize: '5em',
  color: '#aabbcc',
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green100,
  },
});

export default class activity extends PureComponent {
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
		        <RaisedButton
				      icon={
				      		<FontIcon 
				      			className={this.props.classes} 
				      			style={iconStyles}
			      			/>
			      		}
				      style={buttonStyles}
				    />
	    	</MuiThemeProvider>
		)
	}
}