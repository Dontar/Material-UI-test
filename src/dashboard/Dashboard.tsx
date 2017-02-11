import * as React from "react";
import * as ReactGridLayout from "react-grid-layout";
import { Paper } from "material-ui";
require("react-grid-layout/css/styles.css");
require("react-resizable/css/styles.css");

var ReactGridLayout = ReactGridLayout.WidthProvider(ReactGridLayout);


export default class Dashboard extends React.Component<undefined, undefined> {
	layout = [
		{"w":3,"h":5,"x":0,"y":0,"i":"a","moved":false,"static":false},
		{"w":3,"h":5,"x":3,"y":0,"i":"b","moved":false,"static":false},
		{"w":3,"h":5,"x":6,"y":0,"i":"c","moved":false,"static":false},
		{"w":3,"h":5,"x":9,"y":0,"i":"d","moved":false,"static":false},
		{"w":3,"h":5,"x":0,"y":5,"i":"e","moved":false,"static":false},
		{"w":3,"h":5,"x":3,"y":5,"i":"f","moved":false,"static":false},
		{"w":3,"h":5,"x":6,"y":5,"i":"g","moved":false,"static":false},
		{"w":3,"h":5,"x":9,"y":5,"i":"h","moved":false,"static":false},
		{"w":3,"h":5,"x":0,"y":10,"i":"i","moved":false,"static":false},
		{"w":3,"h":5,"x":3,"y":10,"i":"j","moved":false,"static":false}
	];
	onLayout(layout) {
		// console.log(layout);
	}
	render() {
		/*layout={this.layout}*/
		return (
			<ReactGridLayout className="layout" layout={this.layout} cols={12} rowHeight={30} width={1200} onLayoutChange={this.onLayout.bind(this)}>
				<Paper key={'a'} zDepth={2}>a</Paper>
				<Paper key={'b'} zDepth={2}>b</Paper>
				<Paper key={'c'} zDepth={2}>c</Paper>
				<Paper key={'d'} zDepth={2}>d</Paper>
				<Paper key={'e'} zDepth={2}>e</Paper>
				<Paper key={'f'} zDepth={2}>f</Paper>
				<Paper key={'g'} zDepth={2}>g</Paper>
				<Paper key={'h'} zDepth={2}>h</Paper>
				<Paper key={'i'} zDepth={2}>i</Paper>
				<Paper key={'j'} zDepth={2}>j</Paper>
			</ReactGridLayout>
		);
	}
}