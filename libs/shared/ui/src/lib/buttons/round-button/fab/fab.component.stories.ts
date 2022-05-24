import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FabComponent } from './fab.component';

export default {
	title: 'FabComponent',
	component: FabComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<FabComponent>;

const Template: Story<FabComponent> = (args: FabComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	mini: false,
	icon: '',
	disabled: false,
	size: 'md',
	theme: 'primary',
};
