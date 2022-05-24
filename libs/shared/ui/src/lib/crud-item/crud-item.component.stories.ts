import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CrudItemComponent } from './crud-item.component';

export default {
	title: 'CrudItemComponent',
	component: CrudItemComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<CrudItemComponent>;

const Template: Story<CrudItemComponent> = (args: CrudItemComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	isReadOnly: false,
	dueDateText: 'add-todo.due-date',
	completeBtnText: 'todo-item.complete',
	editBtnText: 'todo-item.edit',
	deleteBtnText: 'todo-item.delete',
};
