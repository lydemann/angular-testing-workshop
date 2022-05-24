import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectOptionComponent } from './select-option.component';

export default {
	title: 'SelectOptionComponent',
	component: SelectOptionComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SelectOptionComponent>;

const Template: Story<SelectOptionComponent> = (
	args: SelectOptionComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
