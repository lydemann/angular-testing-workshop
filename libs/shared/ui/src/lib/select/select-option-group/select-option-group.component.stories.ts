import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectOptionGroupComponent } from './select-option-group.component';

export default {
	title: 'SelectOptionGroupComponent',
	component: SelectOptionGroupComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SelectOptionGroupComponent>;

const Template: Story<SelectOptionGroupComponent> = (
	args: SelectOptionGroupComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	label: '',
};
