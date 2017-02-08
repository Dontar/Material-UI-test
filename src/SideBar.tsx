import * as React from 'react';
import SocialLocationCity from "material-ui/svg-icons/social/location-city"
import { List, ListItem, Divider, Paper } from 'material-ui';
import * as Colors from 'material-ui/styles/colors';

interface SideBarState {
	sts: React.CSSProperties;
}

export default class SideBar extends React.Component<undefined, SideBarState> {
	constructor(props?: undefined, context?: any) {
		super(props, context);
		this.state = {
			sts: {
				height: "calc(100% - 64px)",
				width: "300px",
				float: "left",
				overflowX: "hidden"
				// backgroundColor: Colors.lightBlue700
			}
		}
	}
	toggleMenu() {
		var w = this.state.sts.width;
		this.setState(state => ({
			sts: {...state.sts, width: w == '300px'?'0':'300px'}
		}));
	}
	render() {
		return (
			<Paper style={this.state.sts} zDepth={2}>
				<List>
					<ListItem primaryText="Alabala" leftIcon={<SocialLocationCity />} />
				</List>
			</Paper>
		);
	}
}