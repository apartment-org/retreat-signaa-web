import React, {PureComponent, PropTypes} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {green100, green500, green700} from 'material-ui/styles/colors';
import 'font-awesome/css/font-awesome.css';

const buttonStyles = {
  backgroundColor: '#aabbcc',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

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
				<div id={this.props.id}>
			        <RaisedButton
		        	  icon={
				      		<FontIcon 
				      			className={this.props.classes} 
				      			style={iconStyles}
			      			/>
			      		}
				      style={buttonStyles}
				    />
			    </div>
	    	</MuiThemeProvider>
		)
	}
}