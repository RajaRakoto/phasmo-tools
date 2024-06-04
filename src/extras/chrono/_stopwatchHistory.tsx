// eslint-disable-next-line
// @ts-nocheck
import React from "react";

/* utils */
import { getTime } from "@/utils";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default class StopwatchHistory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			history: [],
		};
	}

	componentDidMount(): void {
		this.setHistoryState();
	}

	setHistoryState = (): void => {
		if (localStorage.times) {
			this.setState({ history: localStorage.times.split("|") });
		} else {
			this.setState({ history: [] });
		}
	};

	saveToLocalStorage = (): void => {
		if (localStorage.times) {
			localStorage.times =
				`${Date().toString()} :: ${this.props.formatTime(
					this.props.currentTimeMin,
				)}:${this.props.formatTime(
					this.props.currentTimeSec,
				)}:${this.props.formatTime(this.props.currentTimeMs, "ms")}|` +
				localStorage.times;
		} else {
			localStorage.times = `${Date().toString()} :: ${this.props.formatTime(
				this.props.currentTimeMin,
			)}:${this.props.formatTime(
				this.props.currentTimeSec,
			)}:${this.props.formatTime(this.props.currentTimeMs, "ms")}|`;
		}
	};

	saveTime = (): void => {
		if (typeof Storage !== "undefined") {
			this.saveToLocalStorage();
		} else {
			console.error("local storage not supported");
		}
		this.setHistoryState();
	};

	resetHistory = (): void => {
		if (localStorage.times) {
			localStorage.removeItem("times");
		}
		this.setHistoryState();
	};

	render(): T_FunctionComponent {
		return (
			<div className={"stopwatch__history"}>
				<button
					style={{ backgroundColor: "rgb(96, 157, 198)" }}
					onClick={this.saveTime}
				>
					Save history
				</button>
				<button onClick={this.resetHistory}>Reset history</button>
				{this.state.history.length > 0 && (
					<>
						<h3>History</h3>
						<ul>
							{this.state.history.map((item, index) => (
								<li key={index}>{getTime(item)}</li>
							))}
						</ul>
					</>
				)}
			</div>
		);
	}
}
