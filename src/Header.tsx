import * as React from 'react';
import { AppBar, IconButton } from 'material-ui';
import ActionPowerSettingsNew from "material-ui/svg-icons/action/power-settings-new"

export class Header extends React.Component<undefined, undefined> {
	render() {
		return (
			<AppBar title="My AppBar" showMenuIconButton={false} iconElementRight={<IconButton><ActionPowerSettingsNew /></IconButton>} />
		);
	}
}