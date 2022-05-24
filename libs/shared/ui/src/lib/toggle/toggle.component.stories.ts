import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

export default {
	title: 'ToggleComponent',
	component: ToggleComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<ToggleComponent>;

const Template: Story<ToggleComponent> = (args: ToggleComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	isIcon: '',
	labelPosition: 'after',
	labelTextOn: '',
	labelTextOff: '',
	disabled: false,
	checked: false,
};
