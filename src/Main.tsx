import * as React from 'react';
import { render } from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { SideBar } from "./SideBar";
import { Header } from "./Header"


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// interface MainProps { }
// interface MainState { }

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: Colors.grey50,
		textColor: Colors.grey700
	},
	appBar: {
		textColor: Colors.grey700
	}
});

class Main extends React.Component<undefined, undefined> {
	render() {
		return (
			<div style={{height: "100%"}}>
				<Header />
				<SideBar />
			</div>
		);
	}
}

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
const app = document.getElementById('app');


render(<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}><Main /></MuiThemeProvider>, app);
