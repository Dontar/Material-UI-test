import * as React from 'react';
import { AppBar, IconButton, Tab, Tabs, FontIcon } from 'material-ui';
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new"

export class Header extends React.Component<undefined, undefined> {
	renderTab() {
		return (
			<Tabs style={{ paddingTop: "16px"}}>
				<Tab label="labala1" style={{width: "110px"}} />
				<Tab label="labala1" style={{width: "110px"}} />
				<Tab label="labala1" style={{width: "110px"}} />
				<Tab label="labala1" style={{width: "110px"}} />
			</Tabs>
		);
	}
	render() {
		return (
			<AppBar title="My AppBar" showMenuIconButton={false}>
				{this.renderTab()}
				<IconButton style={{marginTop: "10px", marginLeft: "10px"}}><ActionPowerSettingsNew /></IconButton>
			</AppBar>
		);
	}
}