import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

export default {
	title: 'TooltipComponent',
	component: TooltipComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<TooltipComponent>;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	tooltipText: '',
	position: 'below',
	isOneLine: false,
};
