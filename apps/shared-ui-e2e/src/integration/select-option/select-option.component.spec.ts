describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=selectoptioncomponent--primary&args=value;'),
	);
	it('should render the component', () => {
		cy.get('app-select-option').should('exist');
	});
});
