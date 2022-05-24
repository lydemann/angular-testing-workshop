import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AddTodoReactiveFormsComponent } from './add-todo-reactive-forms.component';

export default {
	title: 'AddTodoReactiveFormsComponent',
	component: AddTodoReactiveFormsComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<AddTodoReactiveFormsComponent>;

const Template: Story<AddTodoReactiveFormsComponent> = (
	args: AddTodoReactiveFormsComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	headlineText: 'add-todo.headline',
	dueDateText: 'add-todo.due-date',
	createText: 'add-todo.create',
	saveText: 'add-todo.save',
	isSavingTodo: false,
	currentTodo: '',
};
