import disp from "../share/dispatcher";

export function loginAction(user = {}) {
	disp.dispatch({ type: "LOGIN", payload: user });
}

export function logoutAction() {
	disp.dispatch({ type: "LOGOUT" });
}

export function sideBarChange() {
	disp.dispatch({ type: "TOGGLE_SIDEBAR" });
}

export function navigateTo(path) {
	disp.dispatch({ type: "NAVIGATE", payload: path });
}

export function attachHistory(history) {
	disp.dispatch({ type: "ATTACH_HISTORY", payload: history });
}