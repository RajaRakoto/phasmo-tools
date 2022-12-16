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

// utils - tracker
function basicFilterCore(
	entities: entitiesArrayType,
	includeEdvidences: string[],
) {
	if (includeEdvidences.length === 0) {
		return entities;
	} else if (includeEdvidences.length === 1) {
		return entities.filter((entity: any) => {
			return entity.edvidencesID.some((id: any) =>
				includeEdvidences.includes(id),
			);
		});
	} else {
		return entities.filter((entity: any) => {
			return includeEdvidences.every((id: any) =>
				entity.edvidencesID.includes(id),
			);
		});
	}
}

function advancedFilterCore(
	entities: entitiesArrayType,
	includeEdvidences: string[],
	excludeEdvidences: string[],
) {
	return entities.filter(entity => {
		if (includeEdvidences.length > 0) {
			for (const edvidence of includeEdvidences) {
				if (entity.edvidencesID.includes(edvidence)) {
					break;
				}
				return false;
			}
		}
		if (excludeEdvidences.length > 0) {
			for (const edvidence of excludeEdvidences) {
				if (entity.edvidencesID.includes(edvidence)) {
					return false;
				}
			}
		}
		return true;
	});
}

function exactlyFilterCore(
	entities: entitiesArrayType,
	includeEdvidences: string[],
	totalEvd: number = 3,
) {
	if (includeEdvidences.length === totalEvd) {
		return entities.filter(entity => {
			return includeEdvidences.every((id: any) =>
				entity.edvidencesID.includes(id),
			);
		});
	}
}

// slice - tracker
const trackerSlice = createSlice({
	name: 'tracker',
	initialState,
	reducers: {
		filter__tracker: (state, action: PayloadAction<any>) => {
			console.info('REDUX -> filter__tracker');
			const includeEdvidences = action.payload[0];
			const excludeEdvidences = action.payload[1];

			// for mimic filter
			if (includeEdvidences.length === 4) {
				return exactlyFilterCore(initialState, includeEdvidences, 4);
			}
			// for others entities filter
			else if (includeEdvidences.length === 3) {
				return exactlyFilterCore(initialState, includeEdvidences);
			} else if (excludeEdvidences.length === 0) {
				return basicFilterCore(initialState, includeEdvidences);
			} else {
				return advancedFilterCore(
					initialState,
					includeEdvidences,
					excludeEdvidences,
				);
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
