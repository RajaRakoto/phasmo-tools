/* types */
import { T_FunctionComponent } from "@/@types";

// =======================================

export default function FloatNav({
	children,
}: {
	children: React.ReactNode;
}): T_FunctionComponent {
	return <div className="float-nav">{children}</div>;
}
