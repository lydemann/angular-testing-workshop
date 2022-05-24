describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=cruditemcomponent--primary&args=todoItem;isReadOnly;dueDateText:add-todo.due-date;completeBtnText:todo-item.complete;editBtnText:todo-item.edit;deleteBtnText:todo-item.delete;',
		),
	);
	it('should render the component', () => {
		cy.get('app-crud-item').should('exist');
	});
});
