import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
	title: 'CheckboxComponent',
	component: CheckboxComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<CheckboxComponent>;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	label: '',
	disabled: false,
	checked: false,
	labelPosition: 'after',
	indeterminate: false,
};
