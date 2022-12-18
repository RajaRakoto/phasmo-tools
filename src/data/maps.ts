/* assets */
// cover
import azile_cover from '../assets/maps/covers/grande_maps_alternatives/azile.png';
import camp_cover from '../assets/maps/covers/moyenne_maps/camp.png';
import prison_cover from '../assets/maps/covers/moyenne_maps/prison.png';
import school_cover from '../assets/maps/covers/moyenne_maps/school.png';
import bleasdale_cover from '../assets/maps/covers/petite_maps/bleasdale.png';
import edgefield_cover from '../assets/maps/covers/petite_maps/edgefield.png';
import grafton_cover from '../assets/maps/covers/petite_maps/grafton.png';
import ridgeview_cover from '../assets/maps/covers/petite_maps/ridgeview.png';
import tanglewood_cover from '../assets/maps/covers/petite_maps/tanglewood.png';
import willow_cover from '../assets/maps/covers/petite_maps/willow.png';
// details
import azile_0_detail from '../assets/maps/details/grande_maps_alternatives/azile/azile-0.png';
import azile_1_detail from '../assets/maps/details/grande_maps_alternatives/azile/azile-1.png';
import camp_0_detail from '../assets/maps/details/moyenne_maps/camp/camp-0.png';
import camp_1_detail from '../assets/maps/details/moyenne_maps/camp/camp-1.png';
import camp_2_detail from '../assets/maps/details/moyenne_maps/camp/camp-2.png';
import prison_1_detail from '../assets/maps/details/moyenne_maps/prison/prison-1.png';
import prison_2_detail from '../assets/maps/details/moyenne_maps/prison/prison-2.png';
import school_1_detail from '../assets/maps/details/moyenne_maps/school/school-1.png';
import school_2_detail from '../assets/maps/details/moyenne_maps/school/school-2.png';
import bleasdale_1_detail from '../assets/maps/details/petite_maps/bleasdale/bleasdale-1.png';
import bleasdale_2_detail from '../assets/maps/details/petite_maps/bleasdale/bleasdale-2.png';
import bleasdale_3_detail from '../assets/maps/details/petite_maps/bleasdale/bleasdale-3.png';
import edgefield_0_detail from '../assets/maps/details/petite_maps/edgefield/edgefield-0.png';
import edgefield_1_detail from '../assets/maps/details/petite_maps/edgefield/edgefield-1.png';
import edgefield_2_detail from '../assets/maps/details/petite_maps/edgefield/edgefield-2.png';
import grafton_1_detail from '../assets/maps/details/petite_maps/grafton/grafton-1.png';
import grafton_2_detail from '../assets/maps/details/petite_maps/grafton/grafton-2.png';
import ridgeview_0_detail from '../assets/maps/details/petite_maps/rdigeview/ridgeview-0.png';
import ridgeview_1_detail from '../assets/maps/details/petite_maps/rdigeview/ridgeview-1.png';
import ridgeview_2_detail from '../assets/maps/details/petite_maps/rdigeview/ridgeview-2.png';
import tanglewood_0_detail from '../assets/maps/details/petite_maps/tanglewoos/tanglewood-0.png';
import tanglewood_1_detail from '../assets/maps/details/petite_maps/tanglewoos/tanglewood-1.png';
import willow_0_detail from '../assets/maps/details/petite_maps/willow/willow-0.png';
import willow_1_detail from '../assets/maps/details/petite_maps/willow/willow-1.png';
// legends
import cercle_legend from '../assets/maps/legends/cercle.png';
import cle_legend from '../assets/maps/legends/cle.png';
import disjoncteur_legend from '../assets/maps/legends/disjoncteur.png';
import lavabo_legend from '../assets/maps/legends/lavabo.png';
import miroir_legend from '../assets/maps/legends/miroir.png';
import musique_legend from '../assets/maps/legends/musique.png';
import ouija_legend from '../assets/maps/legends/ouija.png';
import tarot_legend from '../assets/maps/legends/tarot.png';
import vaudou_legend from '../assets/maps/legends/vaudou.png';

// utils
function excludeElementsInArray(arr: any[], elementsToExclude: any[]) {
	if (elementsToExclude.length === 0) {
		return arr;
	}
	return arr.filter(function (element) {
		return !elementsToExclude.includes(element);
	});
}

function excludeElementsInObject(obj: any, idsToExclude: string[]): any {
	return obj.filter((element: any) => !idsToExclude.includes(element.id));
}

const legends = [
	{
		id: 'cercle',
		name: 'Cercle d’invocation',
		image: cercle_legend,
	},
	{
		id: 'cle',
		name: 'Clé de voiture',
		image: cle_legend,
	},
	{
		id: 'disjoncteur',
		name: 'Disjoncteur',
		image: disjoncteur_legend,
	},
	{
		id: 'lavabo',
		name: 'Lavabo',
		image: lavabo_legend,
	},
	{
		id: 'miroir',
		name: 'Miroir hanté',
		image: miroir_legend,
	},
	{
		id: 'musique',
		name: 'Boîte à musique',
		image: musique_legend,
	},
	{
		id: 'ouija',
		name: 'Planche de Ouija',
		image: ouija_legend,
	},
	{
		id: 'tarot',
		name: 'Cartes de tarot',
		image: tarot_legend,
	},
	{
		id: 'vaudou',
		name: 'Poupée vaudou',
		image: vaudou_legend,
	},
];

const camp_details = [camp_0_detail, camp_1_detail, camp_2_detail];
const prison_details = [prison_1_detail, prison_2_detail];
const school_details = [school_1_detail, school_2_detail];
const azile_details = [azile_0_detail, azile_1_detail];
const bleasdale_details = [
	bleasdale_1_detail,
	bleasdale_2_detail,
	bleasdale_3_detail,
];
const edgefield_details = [
	edgefield_0_detail,
	edgefield_1_detail,
	edgefield_2_detail,
];
const grafton_details = [grafton_1_detail, grafton_2_detail];
const ridgeview_details = [
	ridgeview_0_detail,
	ridgeview_1_detail,
	ridgeview_2_detail,
];
const tanglewood_details = [tanglewood_0_detail, tanglewood_1_detail];
const willow_details = [willow_0_detail, willow_1_detail];

export const little_maps = [
	{
		name: 'Bleasdale Farmhouse',
		cover: bleasdale_cover,
		description:
			'La Bleasdale Farmhouse est une ferme composée de 3 paliers d’étages avec de grandes pièces et de grands espaces. Il s’agit de la maison la plus grande de toutes, dépassant même la taille de Ridgeview. A cause du peu de casiers, il s’agit d’un lieu particulièrement dangereux. Le grenier, pièce emblématique du lieu, n’a qu’un seul moyen d’accès : l’escalier dans le couloir du deuxième étage.',
		prime: 10,
		stat: {
			size: 55,
			level: 50,
			accessibility: 46,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: ['2 casiers dans Workshop'],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Boîtes dans Office',
					'Bibliothèque dans Foyer',
					'Paravent dans Master Bedroom',
					'Machine à laver dans Utility',
					'Paravent dans Attic',
					'Bibliothèque dans Attic',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: [
					'Table (Dining Room)',
					'Plan de travail (Kitchen)',
					'Escalier (Attic)',
				],
			},
			{
				title: 'Portes',
				lists: ['Toilet', 'Bathroom'],
			},
		],
		tips: [
			{
				title: 'Attention au grenier',
				lists: [
					'Bleasdale est la maison disposant du plus grand nombre de grandes pièces. Le grenier (Attic) est la pièce la plus dangereuse car elle n’a que quelques endroits précis où se cacher, est très grande avec peu d’emplacements pour les empreintes, et il y est difficile d’obtenir les preuves par rapport aux autres pièces de la maison.',
					'Lorsqu’une chasse débute, il vous est assez facile de trouver un échappatoire contre les entités ayant une vitesse normale ou faible, tant qu’elle ne vous voit pas. Evitez de rester dans les longs couloirs, sauf si vous souhaitez vous faire repérer, par exemple pour repousser l’entité avec de l’encens.',
					'La seule porte derrière laquelle il est assez safe de se cacher est la Bathroom, à l’étage. Cependant, si le paravent de la Master Bedroom est disponible, il reste la meilleure option de l’étage.',
					'Pour échapper au Deogen, vous pouvez le contourner assez facilement dans le Workshop, ainsi que le loop dans Kitchen, Dining Room ou Attic. ',
				],
			},
		],
		details: bleasdale_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Edgefield Road',
		cover: edgefield_cover,
		description:
			'La Edgefield Road (anciennement Edgefield Street House) est une maison composée de trois paliers d’étages. Elle comporte des petites et des grandes pièces. L’ensemble des 6 chambres est située à l’étage, avec leur salle de douche accolée. Un sous-sol est également présent.',
		prime: 10,
		stat: {
			size: 30,
			level: 15,
			accessibility: 75,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [
					'2 placards dans Upstairs Hallway',
					'1 placard dans Small Blue Bedroom',
					'1 placard dans Large Blue Bedroom',
					'2 placards dans Master Bedroom',
					'2 casiers dans Basement',
					'2 casiers dans Garage',
				],
			},
			{
				title: 'Obstructeurs',
				lists: [''],
			},
			{
				title: 'Éléments de boucle',
				lists: ['Canapé (Living room)'],
			},
			{
				title: 'Portes',
				lists: [
					'Small Blue Bedroom (porte d’entrée)',
					'Orange Bedroom (porte d’entrée)',
					'Purple Bedroom (porte de la salle de bain)',
					'Green Bedroom (porte de la salle de bain)',
					'Large Blue Bedroom (portes d’entrée et de la salle de bain)',
					'Master Bedroom (porte de la salle de bain)',
					'Toilet (porte d’entrée)',
					'Utility (porte d’entrée)',
				],
			},
		],
		tips: [
			{
				title: 'Attention au Deogen',
				lists: [
					'Le Deogen est une entité extrêmement dangereuse dans cette maison. Il n’est possible de le loop qu’autour du canapé du Living Room, ou de le contourner avec un peu de dextérité dans certaines grandes pièces comme la Kitchen. Pour repousser l’entité en utilisant l’encens en chasse, selon vos cachettes disponibles, le type et la position de l’entité, il est souvent efficace de se positionner dans l’un de ces endroits, tant qu’il est suffisamment éloigné de l’entité :',
					'En haut des marches dans le Upstairs Hallway',
					'Au fond du Hallway près du meuble de rangement des chaussures',
					'Devant la porte de Large Blue Bedroom',
				],
			},
		],
		details: edgefield_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Grafton Farmhouse',
		cover: grafton_cover,
		description:
			'La Grafton Farmhouse comme la Bleasdale, comporte de larges pièces avec de grands espaces. Certaines pièces comme la Master Bedroom comportent plusieurs pièces en une.',
		prime: 10,
		stat: {
			size: 33,
			level: 52,
			accessibility: 70,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: ['2 casiers dans Storage'],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Bibliothèque dans Foyer',
					'Boîtes et Machine à laver dans Utility',
					'Paravent et Boites dans Master Bedroom',
					'Matelas dans Workshop',
					'Boîtes de Twin Bedroom',
					'Paravent dans Upstairs Bedroom',
					'Fauteuil dans Upstairs Hallway',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: [
					'Table (Dining Room)',
					'Plan de travail (Kitchen)',
					'Canapé (Living Room)',
					'Étagères (Storage)',
				],
			},
			{
				title: 'Portes',
				lists: ['Master Bedroom (porte de la pièce de stockage)'],
			},
		],
		tips: [
			{
				title: 'Le Deogen est un victime dans ce map',
				lists: [
					'Le Deogen est l’entité la moins dangereuse dans la plupart des cas, les grandes pièces et les éléments de boucle étant fréquents dans cette carte. Faites cependant attention à ne pas vous coincer dans les chambres du rez-de-chaussée, Upstairs Bathroom ou le Workshop.',
					'Grafton est une maison ayant beaucoup de grandes pièces, mais son nombre est limité.',
					'Grafton est une maison ayant beaucoup de grandes pièces, mais son nombre est limité.',
				],
			},
		],
		details: grafton_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Ridgeview Roadhouse',
		cover: ridgeview_cover,
		description:
			'La Ridgeview Court (anciennement Ridgeview Road House) est une maison composée de 3 niveaux. Parmi toutes les maisons modernes, celle-ci compte le plus grand nombre de pièces et est la plus grande en terme de superficie. Elle possède un sous-sol de taille moyenne, un grand garage et 4 chambres dont une au rez-de-chaussée.',
		prime: 10,
		stat: {
			size: 30,
			level: 15,
			accessibility: 80,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [
					'2 placards dans Upstairs Hallway',
					'1 placard dans Boy’s Bedroom',
					'4 casiers dans Garage',
					'2 casiers dans Basement',
				],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Pile d’objets (Living Room)',
					'Pile d’objets (Basement)',
					'Pile d’objets (Master Bedroom)',
					'Réfrigérateur (Kitchen)',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: ['Table (Dining Room)', 'Étagères (Basement)'],
			},
			{
				title: 'Portes',
				lists: [
					'Dining Room (porte du sous-sol)',
					'Toilet (porte d’entrée)',
					'Upstairs Toilet (porte d’entrée)',
					'Teen Boys Bedroom (porte d’entrée)',
					'Bathroom (porte d’entrée)',
				],
			},
		],
		tips: [
			{
				title: 'Attention au Deogen et a la porte du sous-sol',
				lists: [
					'Tout comme dans la plupart des petites maps, Ridgeview dispose de très peu d’endroits pour loop un Deogen. Soyez très prudents quand vous en affrontez un, rapprochez vous autant que possible du centre du bâtiment afin d’éviter de vous retrouver coincés.',
					'La plupart des entités regardent régulièrement derrière la porte du sous-sol, cette cachette est à éviter si vous le pouvez. Evitez également de l’utiliser lorsque vous activez le pentacle du Cercle d’Invocation du Sous-sol, car l’entité vous verra vous y cacher.',
					'Le réfrigérateur de la cuisine est une bonne cachette de secours, car elle n’entre pas dans la liste des cachettes officielles, et ne peut donc jamais avoir de bloqueurs, même dans les difficultés supérieures et en personnalisée.',
					'Il y a deux sets de casiers dans le garage, et un dans le sous-sol. De même, il y a trois placards proches à l’étage. Vérifier leur disponibilité en début de partie est un choix très pertinent, sachant qu’il vous sera toujours utile de définir une route de fuite.',
					'Il est possible de se cacher derrière certaines portes de l’étage, mais gardez en tête que l’entité a une chance de les vérifier si elle passe à proximité ou si elle vous voit vous y cacher. Ne les utilisez qu’en dernier recours, tout comme la porte du sous-sol.',
					'Dû au grand nombre de cachettes proches, Upstairs Hallway & Hallway (devant la porte du garage) sont les meilleurs endroits où repousser l’entité durant la chasse à l’aide d’un encens afin d’accomplir la mission secondaire ou de vous offrir une porte de sortie.',
				],
			},
		],
		details: ridgeview_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Tanglewood Drive',
		cover: tanglewood_cover,
		description:
			'La Tanglewood Drive (anciennement Tanglewood Street House) est le lieu par défaut présenté dans le tutoriel du jeu. Elle est à ce jour la plus petite carte, comportant de petites pièces comme des chambres. Elle se compose de 2 étages, avec un rez-de-chaussée et un petit sous-sol.',
		prime: 10,
		stat: {
			size: 12,
			level: 14,
			accessibility: 72,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [
					'2 placards dans Foyer',
					'1 placard dans Boy’s Bedroom',
					'2 casiers dans Garage',
				],
			},
			{
				title: 'Obstructeurs',
				lists: ['Landeau (Nursery)', 'Planches (Basement)'],
			},
			{
				title: 'Éléments de boucle',
				lists: ['Table (Dining Room)', 'Étagères (Basement)'],
			},
			{
				title: 'Portes',
				lists: [
					'Boy’s Bedroom (porte d’entrée & placard condamné)',
					'Master Bedroom (porte de la salle de bain)',
				],
			},
		],
		tips: [
			{
				title:
					'Evitez d’aller dans le sous-sol en l’absence de la cachette des planches',
				lists: [
					'L’entité, lorsqu’elle commence sa chasse hors de Kitchen ou Dining Room, vient assez rarement check derrière le plan de travail. En s’accroupissant, il est possible d’échapper à sa vision, et donc d’éviter de se faire repérer, tant que vous réagissez si elle semble venir vérifier votre présence dans ces deux pièces. Cela vous permet aussi d’être en position pour le Deogen, que vous pouvez loop autour du plan de travail et de la table.',
					'Evitez d’aller dans le sous-sol en l’absence de la cachette des planches du Basement et si le disjoncteur n’y est pas, car il s’agira d’un couloir de la mort qui permettra à toute entité de vous voir à travers les étagères. Le même conseil est applicable pour Utility et Garage si les casiers sont bloqués, dans une moindre mesure puisque la voiture peut vous aider s’il s’agit d’un Deogen.',
				],
			},
		],
		details: tanglewood_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Willow Street House',
		cover: willow_cover,
		description:
			'Willow Street House une maison moderne qui comporte peu de pièces. Il est assez simple de s’y déplacer, à la fois pour les joueurs et pour l’entité. Le sous-sol est l’endroit le plus dangereux, avec peu d’obstructeurs et de boucles.',
		prime: 10,
		stat: {
			size: 18,
			level: 58,
			accessibility: 50,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [''],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Boîtes dans le Living Room',
					'Réfrigérateur dans la Kitchen',
					'Etagère, Boîtes et Planches dans le Garage',
					'Bureau et siège dans la Master Bedroom',
					'Boîtes dans Boys Bedroom',
					'Poubelle au fond du Basement Hallway',
					'Étagère dans Left Storage Room',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: [
					'Plan de travail (Kitchen)',
					'Canapé (Living Room)',
					'Voiture (Garage)',
					'Étagères (Right Storage Room)',
				],
			},
			{
				title: 'Portes',
				lists: ['Garage ', 'Bathroom', 'Boys Bedroom'],
			},
		],
		tips: [
			{
				title: 'Le Deogen est meurtrier aux étages et dans les chambres',
				lists: [
					'Willow Street House est l’une des maisons les plus difficiles car selon les cachettes indisponibles, il est facile de se faire coincer, car l’entité parcourt la maison très facilement.',
					'Se cacher derrière les quelques portes s’ouvrant sur les murs est tentant, mais l’entité regardera très souvent derrière. Ne faites ça qu’en cas d’absolue nécessité.',
					'Le Deogen est meurtrier aux étages et dans les chambres, prenez garde à vous rapprocher de la cuisine ou du garage si l’entité est probablement un Deogen.',
					'Le Garage est l’une des meilleures pièces pour y trouver une cachette, cependant aux difficultés supérieures, gardez en tête qu’il n’y en aura peut être pas.',
					'Vous pouvez observer l’entité à travers les vitres des portes sans qu’elle vous voit. Vous pouvez ainsi, en allumant les lumières de la maison, regarder à travers les portes fermées du Living Room une entité qui passe dans la Kitchen et évaluer sa vitesse et sa fréquence de clignottement. Cette astuce est particulièrement efficace si vous avez les glacières dans le Living Room et des encens & briquets à disposition.',
				],
			},
		],
		details: willow_details,
		legends: excludeElementsInObject(legends, []),
	},
];

export const middle_maps = [
	{
		name: 'Brownstone High School',
		cover: school_cover,
		description:
			'L’école nommée Brownstone High School est une map de taille moyenne, comportant de nombreuses salles de classe, un gymnase et de très longs couloirs. Il n’y a aucune cachette naturelle dans cet endroit, ce qui rend chaque chasse particulièrement dangereuse. Aucun des couloirs et presqu’aucune des salles de classe ne sont safe contre une entité en chasse, et il est souvent préférable d’être loin de l’entité. L’utilisation des objets maudits dans ces lieux est extrêmement risquée de par le manque de cachettes.',
		prime: 30,
		stat: {
			size: 85,
			level: 90,
			accessibility: 16,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [''],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Bibliothèques (Library)',
					'Dernière cabine (Toutes les salles Toilettes)',
					'Etagère inclinée (Salles de classe « Classroom » 6, 13, 26, 32)',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: ['Couloirs', 'Salles de classe'],
			},
			{
				title: 'Portes',
				lists: [
					'Salles de science (porte du stockage)',
					'Portes du dernier toilette pour hommes (partie gauche de la map, Boys Bathroom, Boys Teachers Bathroom, Upstairs Boys Bathroom [UBB] et Upstairs Boys Teachers Bathroom [UBTB])',
					'Certaines salles de classe',
				],
			},
		],
		tips: [
			{
				title:
					'Évitez les couloirs durant la chasse & Le dernier cabinet des toilettes est un grand avantage pour se cacher',
				lists: [
					'L’entité, lorsqu’elle commence sa chasse, passe souvent son temps à courir dans les couloirs. Attention cependant, il n’est pas du tout rare de la voir se balader de salle en salle.',
					'Afin d’avoir le plus possible de chances de s’en sortir, se cacher dans le dernier cabinet des toilettes est un grand avantage, car l’entité, lorsqu’elle rentre dans les toilettes, se déplace rarement jusqu’au fond. De plus, la porte du dernier cabinet peut servir d’obstructeur de vision très efficace contre le mur.',
					'Évitez les couloirs durant la chasse, bien qu’ils permettent facilement de se faire repérer de loin par l’entité et de la repousser en chasse grâce à de l’encens. N’oubliez pas que si votre visibilité est limitée, celle de l’entité est illimitée tant qu’aucun élément du décor n’obstrue sa vision.',
				],
			},
		],
		details: school_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Prison',
		cover: prison_cover,
		description:
			'La Prison est une des maps de moyenne taille avec un grand nombre de couloirs et des cellules de prison. Complexe de par son architecture, il est très facile de se perdre dans ce lieu. Contrairement à High School, des casiers sont à disposition à proximité des objets maudits, rendant leur utilisation moins risquée. Les plus grands espaces et également les plus dangereux sont les blocs A (à l’ouest) et B (à l’est), contenant des lignes de cellules, ainsi que la Cafeteria, ces emplacements ne disposant que de peu d’options pour se cacher de l’entité.',
		prime: 30,
		stat: {
			size: 78,
			level: 85,
			accessibility: 30,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: ['2 casiers dans Entrance', '2 casiers dans Infirmary'],
			},
			{
				title: 'Obstructeurs',
				lists: [
					'Bibliothèques (Library)',
					'Poubelles (Cafeteria)',
					'Murets (Bathroom A & B)',
					'Murets de cellule (attention, bien se cacher derrière les murets pour fermer la portière sans bouger si elle est ouverte par l’entité, sinon elle vous verra et viendra vous tuer)',
				],
			},
			{
				title: 'Éléments de boucle',
				lists: [
					'Couloirs en général (pièces « Hallway ») sauf Infirmary Hallway',
				],
			},
			{
				title: 'Portes',
				lists: [
					'Inspection',
					'Bathroom B',
					'A-Block bottom right (cabine de contrôle)',
					'B-Block bottom right (cabine de contrôle)',
					'Main Office (porte sud / de droite)',
				],
			},
		],
		tips: [
			{
				title:
					"Évitez les blocs de cellules et les etages durant la chasse & La Cafeteria est l'endroit le plus dangereux de la prison",
				lists: [
					'La Prison est une map assez grande, mais il est facile d’en faire rapidement le tour en séparant les tâches et l’exploration entre les joueurs. Un seul joueur suffit pour contrôler l’étage, quand trois sont nécessaires pour l’ensemble du rez-de-chaussée.',
					'Bien que l’étage des blocs soit situé dans la partie « étage », leur seul moyen d’accès est depuis le bloc en lui même.',
					'Lorsque l’entité débute une chasse dans les blocs de cellules, il est assez difficile de s’en sortir, car il existe peu de cachettes à l’intérieur et à proximité des blocs. Dans cette situation, entrer très rapidement dans une cellule, la fermer et se cacher derrière le muret est une solution alternative viable, puisque l’entité aura une chance de ne pas passer vous voir dans votre cellule.',
					'Au rez-de-chaussée, il y a de nombreuses façon d’échapper à l’entité en tournant dans les coins pour se réfugier dans les casiers. En revanche, à l’étage, il est beaucoup plus difficile de se cacher.',
					'L’endroit le plus dangereux de toute la prison est la cafétéria. Bien qu’il y a des poubelles comme bloqueurs, il est probable qu’elles n’y soient pas dans les difficultés supérieures. Prenez garde si l’entité s’y trouve, car cela complexifiera grandement votre enquête.',
				],
			},
		],
		details: prison_details,
		legends: excludeElementsInObject(legends, []),
	},
	{
		name: 'Maple Lodge Campsite',
		cover: camp_cover,
		description:
			'Il s’agit d’une carte de taille moyenne dans laquelle plusieurs tentes sont réparties à l’extérieur. De plus, une maison se trouve en retrait. Elle est composée d’un rez-de-chaussée et d’un étage.',
		prime: 30,
		stat: {
			size: 68,
			level: 70,
			accessibility: 45,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [''],
			},
			{
				title: 'Obstructeurs',
				lists: [''],
			},
			{
				title: 'Éléments de boucle',
				lists: ['Au feu de camp (Fire Pit)'],
			},
			{
				title: 'Portes',
				lists: ['Dans toutes les tentes'],
			},
		],
		tips: [
			{
				title:
					"Attention à la lumière et à l'alimentation du terrain de camping & Fermez bien la tente",
				lists: [
					"Si l'alimentation du terrain de camping est coupée, assurez-vous d'emporter un briquet ou une bougie pour utiliser le feu de camp et obtenir la lumière dont vous avez vraiment besoin.",
					"Fermeture éclair d'une tente peut être délicate au début. Assurez-vous de cliquer et de faire glisser le rabat de la tente en diagonale pour le fermer.",
					"Cette carte comprend également une cabane à deux étages. Vous pouvez trouver la clé pour entrer sous le tapis devant la porte d'entrée de la cabine.",
					"Si vous recherchez des empreintes digitales , assurez-vous de vérifier les murs à l'intérieur des tentes elles-mêmes, ainsi que les plafonniers des tentes blanches et les interrupteurs qui actionnent les guirlandes lumineuses.",
					"Aventurez-vous dans la cabine et regardez sous les marches pour une surprise amusante. Si vous avez été tué par le fantôme lors d'une chasse, assurez-vous de visiter à nouveau cette zone.",
					"Dirigez-vous vers le lac et marchez jusqu'au bout de la jetée pour un œuf de Pâques : flottant dans le lac se trouve le masque de Jason Voorheen.",
					"Soyez conscient de votre environnement : si vous regardez la route à gauche dès que vous sortez de la camionnette, vous pourrez peut-être apercevoir Slenderman qui se tient là... d'un air menaçant.",
				],
			},
		],
		details: camp_details,
		legends: excludeElementsInObject(legends, [
			'cercle',
			'musique',
			'miroir',
			'tarot',
		]),
	},
];

export const big_maps = [
	{
		name: 'Sunny Meadows - Asylum [En cours de refonte]',
		cover: azile_cover,
		description:
			'L’asile est la plus grande carte du jeu Phasmophobia. De ce fait, il est plus difficile d’y mener une enquête. Elle est composée de deux étages avec des dizaines de pièces de part et d’autre. L’ambiance, les longs couloirs, le décor… tout est mis en œuvre pour faire sentir au joueur qu’il est minuscule par rapport à l’immensité du lieu.',
		prime: 50,
		stat: {
			size: 95,
			level: 92,
			accessibility: 35,
		},
		hiding_places: [
			{
				title: 'Placards et casiers',
				lists: [''],
			},
			{
				title: 'Obstructeurs',
				lists: [''],
			},
			{
				title: 'Éléments de boucle',
				lists: [''],
			},
			{
				title: 'Portes',
				lists: [''],
			},
		],
		tips: [
			{
				title: [''],
				lists: [''],
			},
		],
		details: azile_details,
		legends: excludeElementsInObject(legends, [
			'cercle',
			'musique',
			'miroir',
			'tarot',
		]),
	},
];
