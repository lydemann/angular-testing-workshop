import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AddButtonComponent } from './add-button.component';

export default {
	title: 'AddButtonComponent',
	component: AddButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<AddButtonComponent>;

const Template: Story<AddButtonComponent> = (args: AddButtonComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
