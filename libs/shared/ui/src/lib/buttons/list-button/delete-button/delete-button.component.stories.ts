import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DeleteButtonComponent } from './delete-button.component';

export default {
	title: 'DeleteButtonComponent',
	component: DeleteButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<DeleteButtonComponent>;

const Template: Story<DeleteButtonComponent> = (
	args: DeleteButtonComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
