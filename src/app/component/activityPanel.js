import React, {PureComponent, PropTypes} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import {green100, green500, green700} from 'material-ui/styles/colors';
import 'font-awesome/css/font-awesome.css';
import $ from 'jquery';

const styles = {
  root: {
    margin: '2px',
    height: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
  },
  gridList: {
  	display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  	overflowY: 'hidden',
    overflowX: 'hidden',
  },
  gridTile: {
  	height: '120px',
    width: '100%',
  },
};

const muiTheme = getMuiTheme({});

export default class activityPanel extends PureComponent {
	render(){
		const activityChild = React.Children.map(this.props.children, child => {
			      return (
			      		<GridTile style={styles.gridTile} className='tile'>
			      			{child}
			      		</GridTile>
		      		);
			    });
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.root}>
					<GridList 
						cellHeight='auto' 
						style={styles.gridList} 
						cols={(this.state.width*0.8)/120}>
						{activityChild}
					</GridList>
				</div>
        	</MuiThemeProvider>
		)
	}

	updateDimensions() {
        this.setState({width: $(window).width(), height: $(window).height()});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
}