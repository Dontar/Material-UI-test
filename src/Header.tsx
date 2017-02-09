import * as React from 'react';
import { Link } from 'react-router';
import { AppBar, IconButton, Tab, Tabs, FontIcon, TouchTapEventHandler } from 'material-ui';
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";
import ActionDashboard from "material-ui/svg-icons/action/dashboard";
import ActionPermContactCalendar from "material-ui/svg-icons/action/perm-contact-calendar";
import CommunicationImportContacts from "material-ui/svg-icons/communication/import-contacts";
import EditorFormatListNumbered from "material-ui/svg-icons/editor/format-list-numbered";
import ActionViewList from "material-ui/svg-icons/action/view-list";
import ActionLanguage from "material-ui/svg-icons/action/language";
import ActionSettings from "material-ui/svg-icons/action/settings";
import Login from "./Login";


interface HeaderProperties {
	// onMenuClick: TouchTapEventHandler;
}

export default class Header extends React.Component<HeaderProperties, undefined> {
	btnStyle: React.CSSProperties = {
		marginTop: "10px",
		marginLeft: "10px"
	}
	onLogOut() {
		Login.logOut();
	}
	render() {
		return (
			<AppBar titleStyle={{ flex: .5 }}>
				<Tabs style={{ paddingTop: "16px", flex: 2 }}>
					<Tab icon={<ActionDashboard />} href="#" />
					<Tab icon={<ActionPermContactCalendar />} href="#/calendar" />
					<Tab icon={<CommunicationImportContacts />} href="#/portfolio" />
					<Tab icon={<EditorFormatListNumbered />} href="#/management" />
					<Tab icon={<ActionViewList />} href="#/nomenclatures" />
				</Tabs>

				<div style={{ flex: 3 }}></div>

				<div>
					<IconButton style={this.btnStyle}><ActionLanguage /></IconButton>
					<IconButton style={this.btnStyle}><ActionSettings /></IconButton>
					<IconButton style={this.btnStyle} onClick={this.onLogOut.bind(this)}><ActionPowerSettingsNew /></IconButton>
				</div>
			</AppBar>
		);
	}
}