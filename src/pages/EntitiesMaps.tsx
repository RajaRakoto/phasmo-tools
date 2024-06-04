import React from "react";

/* libs */
import { FaGhost } from "react-icons/fa";
import { TfiMapAlt } from "react-icons/tfi";

/* common */
import { HeaderSection } from "@/common/HeaderSection";
import ScrollUp from "@/common/ScrollUp/ScrollUp";
import FloatNav from "@/common/FloatNav";

/* components */
import Guides from "@/components/Guides/Guides";
import Maps from "@/components/Maps/Maps";
import Note from "@/components/Note/Note";
import Questions from "@/components/Questions/Questions";
import Todo from "@/components/Todo/Todo";
import Tracker from "@/components/Tracker/Tracker";

/* extras */
import Chrono from "@/extras/chrono/Chrono";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function EntitiesMaps(): T_FunctionComponent {
	const entitiesDescription = `
  Préparez-vous à affronter l'inconnu ! Durant vos missions, vous croiserez des entités paranormales, des êtres surnaturels qui hantent les lieux. Votre objectif ? Déterminer leur nature et les renvoyer d'où ils viennent ... avant qu'ils ne vous emportent avec eux ! Munissez-vous de votre matériel et récoltez des preuves pour identifier ces créatures fantomatiques. Mais attention, la prudence est de mis, un faux pas et vous pourriez bien devenir leur prochaine victime !
  `;

	const mapsDescription = `
  Explorez des lieux hantés glaçants ! Chaque mission vous transportera dans un nouveau lieu, une map unique à découvrir. Des maisons abandonnées aux hôpitaux psychiatriques en ruine, arpentez ces environnements sinistres et percez leurs secrets. Mais n'oubliez pas, l'obscurité ne révèle pas que des fantômes ...
  `;

	const Section = ({
		icon,
		title,
		description,
		children,
	}: {
		icon: JSX.Element;
		title: string;
		description: string;
		children: React.ReactNode;
	}): T_FunctionComponent => {
		return (
			<section>
				<HeaderSection icon={icon} title={title} description={description} />
				<div className="content">{children}</div>
			</section>
		);
	};

	const EntitiesSection = (): T_FunctionComponent => (
		<Section
			icon={<FaGhost />}
			title="Entités"
			description={entitiesDescription}
		>
			<Guides />
			<div className="d-flex flex-row flex-wrap align-content-center justify-content-center">
				<Todo title="Todo" todoID="todo-general" addInput deleteBtn />
				<Chrono />
			</div>
			<Tracker />
			<div className="d-flex flex-row flex-wrap align-content-center justify-content-center">
				<Note />
				<Questions />
			</div>
		</Section>
	);

	const MapsSection = (): T_FunctionComponent => (
		<Section icon={<TfiMapAlt />} title="Maps" description={mapsDescription}>
			<Maps />
		</Section>
	);

	const floatNavLinks = [
		{ title: "Guides", href: "#guides-link" },
		{ title: "Todo", href: "#todo-link" },
		{ title: "Chrono", href: "#chrono-link" },
		{ title: "Tracker", href: "#tracker-link" },
		{ title: "Notes", href: "#note-link" },
		{ title: "Q/R", href: "#questions-link" },
		{ title: "L/map", href: "#littlemap-link" },
		{ title: "M/map", href: "#middlemap-link" },
		{ title: "B/map", href: "#bigmap-link" },
	];

	return (
		<React.Fragment>
			<FloatNav>
				{floatNavLinks.map((link) => (
					<a key={link.title} href={link.href}>
						<button className="float-nav-btn">{link.title}</button>
					</a>
				))}
				<hr />
			</FloatNav>
			<EntitiesSection />
			<MapsSection />
			<ScrollUp />
		</React.Fragment>
	);
}
