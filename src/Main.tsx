import * as React from 'react';
import { render } from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import SideBar from "./SideBar";
import Header from "./Header"
import Calendar from "./calendar/Calendar";
import Dashboard from "./dashboard/Dashboard";
import ManagementMain from "./management/ManagementMain";
import NomenclaturesMain from "./nomenclatures/NomenclaturesMain";
import PortfolioMain from "./portfolio/PortfolioMain";
import Login from "./Login";



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// interface MainProps { }
// interface MainState { }

var theme = [
	Colors.grey100,
	Colors.lightBlue400,
	Colors.lightBlue300,
	Colors.lightBlue200,
	Colors.grey800,
	Colors.grey500,
	Colors.grey200
];

export const muiTheme = getMuiTheme({
	palette: {
		primary1Color: theme[1],
		primary2Color: theme[4],
		// primary3Color: theme[0],
		accent1Color: theme[6],
		accent2Color: theme[0],
		// accent3Color: theme[0],
		// textColor: Colors.grey700
	},
	// appBar: {
	// 	textColor: theme[3]
	// },
	// tabs: {
	// 	textColor: theme[3],
	// 	selectedTextColor: theme[1],
	// },
	// inkBar: {
	// 	backgroundColor: Colors.blue500
	// }
});
console.log(muiTheme);

class Main extends React.Component<undefined, undefined> {
	render() {
		return Login.isLogged()?(
			<div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
				<Header />
				<div style={{flex: 1}}>
					{this.props.children}
				</div>
			</div>
		):(<Login />);
	}
}

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
	<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Dashboard} />
				<Route path="calendar" component={Calendar} />
				<Route path="portfolio" component={PortfolioMain} />
				<Route path="management" component={ManagementMain} />
				<Route path="nomenclatures" component={NomenclaturesMain} />
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('app'));
