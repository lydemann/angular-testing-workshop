describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=roundbuttoncomponent--primary'));
	it('should render the component', () => {
		cy.get('app-round-button').should('exist');
	});
});
