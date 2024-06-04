/* libs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* data */
import _entitiesData from "@/data/json/_entities.json";

/* utils */
import {
	exactlyFilterCore,
	basicFilterCore,
	advancedFilterCore,
} from "@/stores/redux/utils";

/* types */
import type { I_Entities } from "@/stores/redux/types";

// =======================================

// state
const initialState: I_Entities[] = _entitiesData;

// slice
const trackerSlice = createSlice({
	name: "tracker",
	initialState,
	reducers: {
		filter__tracker: (state, action: PayloadAction<[string[], string[]]>) => {
			console.info("REDUX -> filter__tracker");
			const includeEdvidences = action.payload[0];
			const excludeEdvidences = action.payload[1];
			state = state;

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

		reset__tracker: () => {
			console.info("REDUX -> reset__tracker");
			return initialState;
		},
	},
});

export default trackerSlice.reducer;
export const { filter__tracker, reset__tracker } = trackerSlice.actions;
