import * as EventEmitter from "events";
import disp from "../share/dispatcher";
import { HistoryBase } from "react-router";

class MainStore extends EventEmitter {

	private _loggedIn: boolean = false;
	get loggedIn(): boolean {
		return this._loggedIn
	}
	set loggedIn(val: boolean) {
		this._loggedIn = val;
		this.emit("logged-change");
	}

	private _sideBarOpen: boolean = true;
	get sideBarOpen() {
		return this._sideBarOpen;
	}
	set sideBarOpen(val) {
		this._sideBarOpen = val;
		this.emit("sidebaropen-change");
	}

	private _curPage: string = "/";
	get curPage() {
		return this._curPage;
	}
	set curPage(val) {
		this._curPage = val;
		this.emit("page-change");
	}

	private history: HistoryBase;

	dispatcherHandler(action: {type: string; payload: any}) {
		switch (action.type) {
			case "LOGIN":
				this.loggedIn = true;
				break;
			case "LOGOUT":
				this.loggedIn = false;
				break;
			case "TOGGLE_SIDEBAR":
				this.sideBarOpen = !this.sideBarOpen;
				break;
			case "NAVIGATE":
				if (this.curPage !== action.payload) {
					this.curPage = action.payload;
					this.history.push(action.payload);
				}
				break;
			case "ATTACH_HISTORY":
				this.history = action.payload;
				break;
		}
	}

}

var store = new MainStore();
disp.register(store.dispatcherHandler.bind(store));

export default store;