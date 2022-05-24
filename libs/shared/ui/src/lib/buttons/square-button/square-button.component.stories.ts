import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SquareButtonComponent } from './square-button.component';

export default {
	title: 'SquareButtonComponent',
	component: SquareButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SquareButtonComponent>;

const Template: Story<SquareButtonComponent> = (
	args: SquareButtonComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
