import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* json data */
import __entitiesData_ from './json/_entities.json';

// types - tracker
type entitiesArrayType = {
	id: string;
	name: string;
	edvidencesID: string[];
	edvidences: string[];
}[];

// init state - tracker
const initialState: entitiesArrayType = __entitiesData_;

// slice - tracker
const trackerSlice = createSlice({
	name: 'tracker',
	initialState,
	reducers: {
		filter__tracker: (state, action: PayloadAction<string[]>) => {
			console.info('REDUX -> filter__tracker');
			if (action.payload.length === 0) {
				return initialState;
			} else if (action.payload.length === 1) {
				return initialState.filter(entity => {
					return entity.edvidencesID.some(id => action.payload.includes(id));
				});
			} else {
				return initialState.filter(entity => {
					return action.payload.every(id => entity.edvidencesID.includes(id));
				});
			}
		},

		reset__tracker: state => {
			console.info('REDUX -> reset__tracker');
			return initialState;
		},
	},
});

// exportation - tracker
export default trackerSlice.reducer;
export const { filter__tracker, reset__tracker } = trackerSlice.actions;
