import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RoundButtonComponent } from './round-button.component';

export default {
	title: 'RoundButtonComponent',
	component: RoundButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<RoundButtonComponent>;

const Template: Story<RoundButtonComponent> = (args: RoundButtonComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
