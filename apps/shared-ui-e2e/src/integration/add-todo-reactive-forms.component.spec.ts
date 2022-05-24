describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=addtodoreactiveformscomponent--primary&args=headlineText:add-todo.headline;dueDateText:add-todo.due-date;createText:add-todo.create;saveText:add-todo.save;isSavingTodo;currentTodo;',
		),
	);
	it('should render the component', () => {
		cy.get('app-add-todo-reactive-forms').should('exist');
	});
});
