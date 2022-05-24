describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=textareacomponent--primary&args=placeholder;'),
	);
	it('should render the component', () => {
		cy.get('app-textarea').should('exist');
	});
});
