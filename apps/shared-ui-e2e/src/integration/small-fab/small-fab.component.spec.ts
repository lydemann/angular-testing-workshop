describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=smallfabcomponent--primary'));
	it('should render the component', () => {
		cy.get('app-small-fab').should('exist');
	});
});
