/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Section' ),
	icon,
	description: __( 'A wrapping section acting as a container for other blocks.' ),
	keywords: [ __( 'container' ), __( 'wrapper' ), __( 'row' ) ],
	supports: {
		align: [ 'wide', 'full' ],
		anchor: true,
		html: false,
	},
	edit,
	save,
};
