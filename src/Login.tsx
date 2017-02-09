import * as React from "react";
import * as Colors from "material-ui/styles/colors";
import { Paper, TextField, FlatButton, Checkbox } from "material-ui";
import Logo from "./share/icons/Logo";
import SocialPerson from "material-ui/svg-icons/social/person-outline";
import ActionLockOutline from "material-ui/svg-icons/action/lock-outline";
import { hashHistory } from 'react-router';
import {muiTheme} from './Main';

var isLogged: boolean = false;

export default class Login extends React.Component<undefined, undefined> {
	mainDivStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		backgroundColor: muiTheme.palette.primary1Color
	}
	userPanel: React.CSSProperties = {
		display: "flex",
		// width: "300px",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px"
	}
	iconStyle: React.CSSProperties = {
		paddingRight: "5px"
	}

	rowStyle: React.CSSProperties = {
		marginTop: "20px"
	}

	static isLogged(): boolean {
		return isLogged;
	}
	static logOut() {
		isLogged = false;
		hashHistory.push("/");
	}
	private login() {
		isLogged = true;
		hashHistory.push("/");
	}
	render() {
		return (
			<div style={this.mainDivStyle}>
				<Paper style={this.userPanel} zDepth={4}>
					<div>
						<Logo />
					</div>
					<div>
						<SocialPerson style={this.iconStyle} />
						<TextField floatingLabelText="User name" />
					</div>
					<div>
						<ActionLockOutline style={this.iconStyle} />
						<TextField type="password" floatingLabelText="Password" />
					</div>
					<div style={{...this.rowStyle, width: "100%"}}>
						<Checkbox label="Remeber Me" />
					</div>
					<div style={{ paddingTop: "20px", display: "flex", width: "100%" }}>
						<FlatButton label="Forgot password?" labelStyle={{color: Colors.grey400}}></FlatButton>
						<div style={{ flex: 1 }} />
						<FlatButton label="Login" onClick={this.login.bind(this)} />
					</div>
				</Paper>
			</div>
		);
	}
}