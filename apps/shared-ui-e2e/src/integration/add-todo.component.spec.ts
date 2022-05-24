describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=addtodocomponent--primary&args=isSavingTodo;currentTodo;',
		),
	);
	it('should render the component', () => {
		cy.get('app-add-todo').should('exist');
	});
});
