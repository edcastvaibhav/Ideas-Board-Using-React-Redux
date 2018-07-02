import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import HomeContainer from "./../home";

injectTapEventPlugin();



class App extends Component {

	constructor(props, context) {
        super(props, context);
    }

	render(){

		const muiTheme = getMuiTheme({
	      palette: {
	        primary1Color: "#4e4ad4"
	      }
	    });

		return (

			<MuiThemeProvider {...this.props} muiTheme={muiTheme}>
				<div>
                    <main>
						<Route exact path="/" component={HomeContainer} />
					</main>
                    <main>
						<Route exact path="/home" component={HomeContainer} />
					</main>
				</div>
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {};

export default connect((state) => {
   	return {
   		router: state.routing
   	}
})(App);