describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=selectoptiongroupcomponent--primary&args=label;'),
	);
	it('should render the component', () => {
		cy.get('app-select-option-group').should('exist');
	});
});
