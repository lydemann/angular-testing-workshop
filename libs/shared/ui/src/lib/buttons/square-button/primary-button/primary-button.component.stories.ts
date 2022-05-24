import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PrimaryButtonComponent } from './primary-button.component';

export default {
	title: 'PrimaryButtonComponent',
	component: PrimaryButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<PrimaryButtonComponent>;

const Template: Story<PrimaryButtonComponent> = (
	args: PrimaryButtonComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
