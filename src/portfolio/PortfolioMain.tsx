import * as React from "react";
import { Paper, List, Subheader, ListItem } from "material-ui";
import mainStore from "../stores/MainStore";
import { ContentInbox, ContentSend, ContentDrafts, ActionGrade, SocialLocationCity, ActionAccountBalance, SocialGroup, ActionTrendingUp, CommunicationBusiness, DeviceWidgets, EditorSpaceBar } from "material-ui/svg-icons";

interface PortfolioMainState {
	sideBarOpen: boolean;
}

export default class PortfolioMain extends React.Component<undefined, PortfolioMainState> {
	style: React.CSSProperties = {
		display: "flex",
		height: "100%"
	}

	constructor(props?, context?) {
		super(props, context);
		this.state = {
			sideBarOpen: mainStore.sideBarOpen
		}
		this.onSideBaroOpenChange = this.onSideBaroOpenChange.bind(this);
	}

	onSideBaroOpenChange() {
		this.setState({
			sideBarOpen: mainStore.sideBarOpen
		});
	}

	componentWillMount() {
		mainStore.on("sidebaropen-change", this.onSideBaroOpenChange);
	}

	componentWillUnmount() {
		mainStore.removeListener("sidebaropen-change", this.onSideBaroOpenChange);
	}

	render() {
		return (
			<div style={this.style}>
				<Paper style={{ width: this.state.sideBarOpen ? "300px" : "0px", overflow: "hidden", overflowY: "auto" }} zDepth={3}>
					<List>
						<ListItem primaryText="Properties" leftIcon={<SocialLocationCity />} primaryTogglesNestedList={true} initiallyOpen={true} nestedItems={[
							<ListItem primaryText="Cities" leftIcon={<CommunicationBusiness />} />,
							<ListItem primaryText="Buildings" leftIcon={<SocialLocationCity />} />,
							<ListItem primaryText="Apartments" leftIcon={<DeviceWidgets />} />,
						]} />
						<ListItem primaryText="Economic Indicators" leftIcon={<ActionTrendingUp />} primaryTogglesNestedList={true} initiallyOpen={true} nestedItems={[
							<ListItem primaryText="Calculation of Profitability" leftIcon={<EditorSpaceBar />} />,
							<ListItem primaryText="Calculation of Market Value" leftIcon={<EditorSpaceBar />} />,
							<ListItem primaryText="Actual figures and Targets" leftIcon={<EditorSpaceBar />} />,
							<ListItem primaryText="Sold Properties" leftIcon={<EditorSpaceBar />} />
						]}/>
						<ListItem disabled primaryText="Investment partner" leftIcon={<SocialGroup />} />
						<ListItem primaryText="Financing" leftIcon={<ActionAccountBalance />} primaryTogglesNestedList={true} initiallyOpen={true} nestedItems={[
							<ListItem primaryText="Credit" leftIcon={<EditorSpaceBar />} />,
							<ListItem primaryText="AIGH Loans Summary" leftIcon={<EditorSpaceBar />} />,
							<ListItem primaryText="AIGH Loans" leftIcon={<EditorSpaceBar />} />
						]}/>
					</List>
				</Paper>
				<div style={{ flex: 1 }}>

				</div>
			</div>
		);
	}
}