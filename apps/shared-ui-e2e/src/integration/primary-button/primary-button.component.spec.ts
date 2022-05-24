describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=primarybuttoncomponent--primary'));
	it('should render the component', () => {
		cy.get('app-primary-button').should('exist');
	});
});
