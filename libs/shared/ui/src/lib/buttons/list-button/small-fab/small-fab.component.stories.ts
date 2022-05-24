import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SmallFabComponent } from './small-fab.component';

export default {
	title: 'SmallFabComponent',
	component: SmallFabComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SmallFabComponent>;

const Template: Story<SmallFabComponent> = (args: SmallFabComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
