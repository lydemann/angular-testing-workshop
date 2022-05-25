import { guidelinesStory } from '../guidelines.stories';
import { ColorComponent } from './color.component';

guidelinesStory.add('Palette', () => ({
	moduleMetadata: {
		declarations: [ColorComponent],
	},
	template: `
		<color-reel></color-reel>
	`,
}));
