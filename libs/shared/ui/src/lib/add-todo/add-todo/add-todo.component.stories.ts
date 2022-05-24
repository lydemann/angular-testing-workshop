import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AddTodoComponent } from './add-todo.component';

export default {
	title: 'AddTodoComponent',
	component: AddTodoComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<AddTodoComponent>;

const Template: Story<AddTodoComponent> = (args: AddTodoComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	isSavingTodo: false,
	currentTodo: '',
};
