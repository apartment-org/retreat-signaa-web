import React, {PureComponent, PropTypes} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {green100, green500, green700} from 'material-ui/styles/colors';
import 'font-awesome/css/font-awesome.css';

const buttonStyles = {
  backgroundColor: '#aabbcc',
  width: '100px',
  height: '100px',
};



const iconStyles = {
  fontSize: '50px',
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
				<IconButton 
	      			children={
				      		<FontIcon 
				      			className={this.props.classes} 
				      			style={iconStyles}
			      			/>
			      		}
		      		iconStyle={iconStyles}
      			/>
		        
	    	</MuiThemeProvider>
		)
	}
}