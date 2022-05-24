describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=listbuttoncomponent--primary'));
	it('should render the component', () => {
		cy.get('app-list-button').should('exist');
	});
});
