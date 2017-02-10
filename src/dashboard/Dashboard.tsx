import * as React from "react";
import * as ReactGridLayout from "react-grid-layout";
require("css!react-grid-layout/css/style.css");


export default class Dashboard extends React.Component<undefined, undefined> {
	layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 }
	];

	render() {
		return (
			<ReactGridLayout className="layout" layout={this.layout} cols={12} rowHeight={30} width={1200}>
				<div key={'a'}>a</div>
				<div key={'b'}>b</div>
				<div key={'c'}>c</div>
			</ReactGridLayout>
		);
	}
}