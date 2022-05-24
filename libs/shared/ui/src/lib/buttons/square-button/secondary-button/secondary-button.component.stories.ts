import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SecondaryButtonComponent } from './secondary-button.component';

export default {
	title: 'SecondaryButtonComponent',
	component: SecondaryButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SecondaryButtonComponent>;

const Template: Story<SecondaryButtonComponent> = (
	args: SecondaryButtonComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
