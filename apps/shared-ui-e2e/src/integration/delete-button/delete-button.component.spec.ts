describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=deletebuttoncomponent--primary'));
	it('should render the component', () => {
		cy.get('app-delete-button').should('exist');
	});
});
