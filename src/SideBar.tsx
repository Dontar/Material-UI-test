import * as React from 'react';
import SocialLocationCity from "material-ui/svg-icons/social/location-city"
import { List, ListItem, Divider, Paper } from 'material-ui';
import * as Colors from 'material-ui/styles/colors';

export class SideBar extends React.Component<undefined, undefined> {
	sts: React.CSSProperties = {
		height: "calc(100% - 64px)",
		width: "300px",
		float: "left",
		// backgroundColor: Colors.lightBlue700
	}
	render() {
		return (
			<Paper style={this.sts}>
				<List>
					<ListItem primaryText="Alabala" leftIcon={<SocialLocationCity />} />
				</List>
			</Paper>
		);
	}
}