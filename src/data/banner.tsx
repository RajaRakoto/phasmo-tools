/* libs */
import { FaGhost, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

/* common */
import { IconRender } from "@/common/IconRender";

/* types */
import type { I_Banner } from "@/@types";

// =======================================

export const banner: I_Banner = {
	bannerInformation: [
		"Phasmophobia est un jeu d'horreur coopératif qui vous plongera au cœur de l'inconnu. Avec vos amis, vous incarnez des enquêteurs paranormaux et explorez des lieux hantés infestés d'esprits. Munis de votre équipement de chasseurs de fantômes, vous devrez identifier et capturer les preuves de l'activité paranormale qui règne dans ces endroits glaçants. Collaborez, analysez les indices et triomphez de la peur pour remporter la partie !",
		"Maîtrisez l'art de la chasse aux fantômes grâce à nos outils et nos guides complets pour devenir un expert dans la capture des entités paranormales. Découvrez les secrets des fantômes, leurs capacités, leurs forces et leurs faiblesses. Apprenez les meilleures stratégies pour les traquer et les identifier, et devenez un chasseur de fantômes de renom ...",
	],
	contrib: {
		message:
			"Ce site est un projet en open-source, n'hésitez pas à contribuer sur GitHub si vous etes familier avec React/TypeScript",
		url: "https://github.com/RajaRakoto/phasmo-tools",
		icon: IconRender({ icon: <FaGithub />, size: "44" }),
	},
	features: [
		{
			title: "Entités",
			icon: IconRender({ icon: <FaGhost />, size: "77" }),
			lists: [
				"Guides: Explorez les guides du jeu et découvrez plein d'infos utiles, parfaites pour les nouveaux joueurs",
				"Todo: Un résumé des tâches à accomplir pour vous aider à avancer dans le jeu et adopter une stratégie gagnante",
				"Timer: Un chronomètre pour bien gérer votre temps, car le timing est essentiel dans ce jeu",
				"Tracker: Votre outil ultime pour tracker les entités",
				"Notes: Prenez des notes pendant vos parties pour ne rien oublier",
				"Questions/Réponses: Une série de questions/réponses pour votre enquête paranormale avec la Spirit Box",
			],
		},
		{
			title: "Maps",
			icon: IconRender({ icon: <FaMapMarkerAlt />, size: "77" }),
			lists: [
				"Découvrez tout sur les lieux de vos enquêtes avant de vous y aventurer",
				"Maîtrisez l'art de vous orienter dans chaque lieu",
				"Apprenez à utiliser les objets maudits pour capturer les entités avec efficacité",
				"Connaissez la taille, la difficulté et l'accessibilité des cachettes sur chaque carte",
			],
		},
	],
};
