export type T_FunctionComponent = React.ReactElement | null;

export type T_ObjDetails = [string[], I_Legend[]];

export interface I_Legends {
	id: string;
	name: string;
	image: string;
}

export interface I_Features {
	title: string;
	icon: T_FunctionComponent;
	lists: string[];
}

export interface I_Contrib {
	message: string;
	url: string;
	icon: T_FunctionComponent;
}

export interface I_Banner {
	bannerInformation: string[];
	contrib: I_Contrib;
	features: I_Features[];
}

export interface I_Evd {
	id: string;
	name: string;
	isClicked_include: boolean;
	isClicked_exclude: boolean;
}

export interface I_BtnProps {
	text: string;
	second: number;
	status: boolean;
}

export interface I_List {
	title: string;
	lists: string[];
}

export interface I_Stat {
	size: number;
	level: number;
	accessibility: number;
}

export interface I_Maps {
	name: string;
	cover: string;
	description: string;
	prime: number;
	stat: I_Stat;
	hiding_places: I_List[];
	tips: I_List[];
	details: string[];
	legends: I_Legend[];
}

export interface I_AttackSM {
	data: {
		percentage: string;
		lists: string[];
	}[];
}

export interface I_Resume {
	data: {
		name: string;
		resume: string[];
	}[];
}
