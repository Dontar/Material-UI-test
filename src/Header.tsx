import * as React from 'react';
import { Link, hashHistory, History } from 'react-router';
import { AppBar, IconButton, Tab, Tabs, FontIcon, TouchTapEventHandler } from 'material-ui';
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";
import ActionDashboard from "material-ui/svg-icons/action/dashboard";
import ActionPermContactCalendar from "material-ui/svg-icons/action/perm-contact-calendar";
import CommunicationImportContacts from "material-ui/svg-icons/communication/import-contacts";
import EditorFormatListNumbered from "material-ui/svg-icons/editor/format-list-numbered";
import ActionViewList from "material-ui/svg-icons/action/view-list";
import ActionLanguage from "material-ui/svg-icons/action/language";
import ActionSettings from "material-ui/svg-icons/action/settings";
import { muiTheme } from './Main';

import { sideBarChange, logoutAction, navigateTo } from "./actions/MainActions";
import mainStore from "./stores/MainStore"

interface HeaderProperties {
}

interface HeaderState {
	path: string;
}

export default class Header extends React.Component<HeaderProperties, HeaderState> {
	constructor(props?, context?) {
		super(props, context);
		this.state = {
			path: mainStore.curPage
		}
		this.onStorePageChange = this.onStorePageChange.bind(this);
	}

	btnStyle: React.CSSProperties = {
		marginTop: "10px",
		marginLeft: "10px"
	};

	componentWillMount() {
		mainStore.on("page-change", this.onStorePageChange);
	}
	componentWillUnmount() {
		mainStore.removeListener("page-change", this.onStorePageChange);
	}

	private onStorePageChange() {
		this.setState({
			path: mainStore.curPage
		});
	}

	private onTabChange(value: any, e: React.FormEvent<any>, tab: Tab) {
		navigateTo(value);
	}

	private onSideBarToggle() {
		sideBarChange();
	}

	private onLogout() {
		logoutAction();
	}

	render() {
		return (
			<AppBar titleStyle={{ flex: .5 }} onLeftIconButtonTouchTap={this.onSideBarToggle.bind(this)}>
				<Tabs style={{ paddingTop: "16px", flex: 2 }} onChange={this.onTabChange.bind(this)} value={this.state.path}>
					<Tab icon={<ActionDashboard />} value="/" />
					<Tab icon={<ActionPermContactCalendar />} value="/calendar" />
					<Tab icon={<CommunicationImportContacts />} value="/portfolio" />
					<Tab icon={<EditorFormatListNumbered />} value="/management" />
					<Tab icon={<ActionViewList />} value="/nomenclatures" />
				</Tabs>

				<div style={{ flex: 3 }}></div>

				<div>
					<IconButton style={this.btnStyle}>
						<ActionLanguage color={muiTheme.palette.accent1Color} />
					</IconButton>
					<IconButton style={this.btnStyle}>
						<ActionSettings color={muiTheme.palette.accent1Color} />
					</IconButton>
					<IconButton style={this.btnStyle} onClick={this.onLogout} color={muiTheme.palette.accent1Color}>
						<ActionPowerSettingsNew color={muiTheme.palette.accent1Color} />
					</IconButton>
				</div>
			</AppBar>
		);
	}
}