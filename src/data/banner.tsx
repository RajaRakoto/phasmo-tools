import { FaGhost, FaMapMarkerAlt } from 'react-icons/fa';

/* common */
import { IconRender } from '../common/icons';

// typing - banner
type FeaturesType = {
	title: String;
	icon: any;
	lists: String[];
}[];

type BannerType = {
	bannerInformation: String[];
	features: FeaturesType;
};

// exportation - banner
export const banner: BannerType = {
	bannerInformation: [
		"Phasmophobia est un jeu réalisé par Kinetic Games sorti le 18 septempre 2020 sur Steam en accès anticipé. C'est un jeu d'horreur psychologique en ligne coopératif à 4 joueurs où vous et vos coéquipiers enquêteurs dans le paranormal explorerez des lieux hantés remplis d'activité paranormale et rassemblerez autant de preuves du paranormal que possible. Vous utiliserez votre équipement de chasse aux fantômes pour rechercher et enregistrer les preuves de toute entité qui hante les lieux et les vendre à une équipe d'extermination des fantômes.",
		"Phasmophobia Tools, l'expérience ultime de chasse aux fantômes! Découvrez tous les outils et astuces dont vous avez besoin pour devenir un expert dans la capture des entités paranormales grâce à Phasmophobia Tools. Nous vous fournirons toutes les informations sur les capacités, les forces et les faiblesses des entités, ainsi que sur les meilleures stratégies pour les traquer et les capturer. Rejoignez-nous maintenant et devenez un chasseur de fantômes de renom!",
	],
	features: [
		{
			title: 'Entités',
			icon: IconRender({ icon: <FaGhost />, size: '77' }),
			lists: [
				'Généralités: decouvrez les generalités du jeu et diverses informations utiles (surtout pour les débutants)',
				'Todo: un résumé des tâches à effectuer pour vous aider à progresser dans le jeu ainsi adopter une stratégie efficace',
				'Timer & Chrono: un chronomètre et un minuteur pour vous aider à gérer votre temps, le timing est très important dans ce jeu',
				'Tracker: votre outil ultime pour traquer les entités',
				'Notes: un outil pour prendre des notes durant vos parties',
				'Questions/Réponses: un serie de questions/réponses lors de votre enquête paranormale avec un Spirit Box',
			],
		},
		{
			title: 'Maps',
			icon: IconRender({ icon: <FaMapMarkerAlt />, size: '77' }),
			lists: [
				'Apprendre d\'avantage sur les lieux où vous allez enquêter',
				'Apprenez à vous repérer dans les lieux',
				'Apprenez à utiliser les objets maudits pour vous aider à capturer les entités',
				'Connaissez la taille, la difficulté et l\'accessibilité des cachettes sur chaque map',
			],
		},
	],
};
