import * as React from "react";
import * as Colors from "material-ui/styles/colors";
import { Paper, TextField, FlatButton, Checkbox } from "material-ui";
import Logo from "./share/icons/Logo";
import SocialPerson from "material-ui/svg-icons/social/person-outline";
import ActionLockOutline from "material-ui/svg-icons/action/lock-outline";
import { hashHistory } from 'react-router';
import { muiTheme } from './Main';
import { navigateTo, loginAction } from "./actions/MainActions";

var isLogged: boolean = false;

interface LoginProps {
}

export default class Login extends React.Component<LoginProps, undefined> {
	constructor(props?:any, context?: any) {
		super(props, context);
		this.onLogin = this.onLogin.bind(this);
	}

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

	fldUser: TextField;
	fldPassword: TextField;
	fldRemeber: Checkbox;

	private onLogin() {
		loginAction({
			user: this.fldUser.getValue(),
			password: this.fldPassword.getValue(),
			remember: this.fldRemeber.isChecked()
		});
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
						<TextField ref={el => this.fldUser = el} floatingLabelText="User name" />
					</div>
					<div>
						<ActionLockOutline style={this.iconStyle} />
						<TextField ref={el => this.fldPassword = el} type="password" floatingLabelText="Password" />
					</div>
					<div style={{...this.rowStyle, width: "100%"}}>
						<Checkbox ref={el => this.fldRemeber = el} label="Remeber Me" />
					</div>
					<div style={{ paddingTop: "20px", display: "flex", width: "100%" }}>
						<FlatButton label="Forgot password?" labelStyle={{color: Colors.grey400}}></FlatButton>
						<div style={{ flex: 1 }} />
						<FlatButton label="Login" onClick={this.onLogin} />
					</div>
				</Paper>
			</div>
		);
	}
}