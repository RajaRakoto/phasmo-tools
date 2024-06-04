/* types */
import { I_User } from "@/@types";

// =======================================

export interface I_InitialeState {
	count_redux: number;
	user_redux: I_User[];
}

export interface I_Todo {
	id: number;
	text: String;
	completed: boolean;
}

export interface I_TodoState {
	id: string;
	todo: I_Todo[];
}

export interface I_Entities {
	id: string;
	name: string;
	description: string;
	anecdote: string;
	difficulty: number;
	power: number;
	tools: number;
	speed: number;
	attackCL: number;
	attackSM: number;
	edvidencesID: string[];
	edvidences: string[];
	datas: string[];
	strategies: string[];
	todoID: string;
	todo: string[];
}
