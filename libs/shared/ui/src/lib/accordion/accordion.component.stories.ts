import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

export default {
	title: 'AccordionComponent',
	component: AccordionComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<AccordionComponent>;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	boldTitle: '',
	normalTitle: '',
	isExpanded: false,
};
