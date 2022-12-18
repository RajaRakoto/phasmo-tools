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
function excludeElements(arr: any[], elementsToExclude: any[]) {
	if (elementsToExclude.length === 0) {
		return arr;
	}
	return arr.filter(function (element) {
		return !elementsToExclude.includes(element);
	});
}

// global
const legends = [
	cercle_legend,
	cle_legend,
	disjoncteur_legend,
	lavabo_legend,
	miroir_legend,
	musique_legend,
	ouija_legend,
	tarot_legend,
	vaudou_legend,
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

export const maps_general = [
	'Les éléments de boucle sont utiles contre les entités lentes n’accélérant pas, un Hantu dans la chaleur par exemple. Ils sont TOUJOURS à garder en tête contre un Deogen.',
	'Attention, vous cacher derrière des portes est extrêmement risqué car l’entité a 50% de chances de regarder derrière la porte lorsqu’il passe à côté, et 100% de chances s’il vous a vu disparaître à proximité.',
];

export const maps_little = [
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
				title:
					'Le Deogen est une entité extrêmement dangereuse dans cette maison. Il n’est possible de le loop qu’autour du canapé du Living Room, ou de le contourner avec un peu de dextérité dans certaines grandes pièces comme la Kitchen. Pour repousser l’entité en utilisant l’encens en chasse, selon vos cachettes disponibles, le type et la position de l’entité, il est souvent efficace de se positionner dans l’un de ces endroits, tant qu’il est suffisamment éloigné de l’entité :',
				lists: [
					'En haut des marches dans le Upstairs Hallway',
					'Au fond du Hallway près du meuble de rangement des chaussures',
					'Devant la porte de Large Blue Bedroom',
				],
			},
		],
		legends: excludeElements(legends, []),
		details: edgefield_details,
	},
];
