/* libs */
import { PayloadAction } from "@reduxjs/toolkit";

/* types */
import type { I_Todo, I_TodoState, I_Entities } from "@/stores/redux/types";

// =======================================

export function getConcernedTodo(
	state: I_TodoState[],
	action:
		| PayloadAction<[string, string]>
		| PayloadAction<I_Todo[]>
		| PayloadAction<[string]>
		| PayloadAction<[string, I_Todo]>,
) {
	return state.find((todo) => todo.id === action.payload[0]);
}

export function getTodoFormat(todoList: string[]): I_Todo[] {
	return todoList.map((todo, index) => ({
		id: index + 1,
		text: todo,
		completed: false,
	}));
}

export function basicFilterCore(
	entities: I_Entities[],
	includeEdvidences: string[],
) {
	if (includeEdvidences.length === 0) {
		return entities;
	} else if (includeEdvidences.length === 1) {
		return entities.filter((entity: I_Entities) => {
			return entity.edvidencesID.some((id: string) =>
				includeEdvidences.includes(id),
			);
		});
	} else {
		return entities.filter((entity: I_Entities) => {
			return includeEdvidences.every((id: string) =>
				entity.edvidencesID.includes(id),
			);
		});
	}
}

export function advancedFilterCore(
	entities: I_Entities[],
	includeEdvidences: string[],
	excludeEdvidences: string[],
) {
	return entities.filter((entity) => {
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

export function exactlyFilterCore(
	entities: I_Entities[],
	includeEdvidences: string[],
	totalEvd: number = 3,
): I_Entities[] {
	if (includeEdvidences.length === totalEvd) {
		return entities.filter((entity) => {
			return includeEdvidences.every((id: string) =>
				entity.edvidencesID.includes(id),
			);
		});
	} else {
		return [];
	}
}
