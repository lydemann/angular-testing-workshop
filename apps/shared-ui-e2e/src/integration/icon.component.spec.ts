describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=iconcomponent--primary&args=icon;'),
	);
	it('should render the component', () => {
		cy.get('app-icon').should('exist');
	});
});
