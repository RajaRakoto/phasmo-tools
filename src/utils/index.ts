/* types */
import type { I_Legends } from "@/@types";

// =======================================

export function getTime(timeString: string): string {
	const timeIndex = timeString.lastIndexOf("::");
	return timeString.slice(timeIndex + 2, timeIndex + 8);
}

export function excludeElementsInObject(
	obj: I_Legends[],
	idsToExclude: string[],
): I_Legends[] {
	return obj.filter((element) => !idsToExclude.includes(element.id));
}

export function getFileName(input: string): string {
	const parts = input.split("/");
	const file = parts[parts.length - 1];
	return file?.split(".")[0] || "";
}
