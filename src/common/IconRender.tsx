/* libs */
import { IconContext } from "react-icons";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export function IconRender({
	icon,
	size,
}: {
	icon: JSX.Element;
	size: string;
}): T_FunctionComponent {
	return (
		<IconContext.Provider value={{ size: size }}>{icon}</IconContext.Provider>
	);
}
