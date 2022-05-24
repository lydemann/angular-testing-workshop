import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ListButtonComponent } from './list-button.component';

export default {
	title: 'ListButtonComponent',
	component: ListButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<ListButtonComponent>;

const Template: Story<ListButtonComponent> = (args: ListButtonComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
