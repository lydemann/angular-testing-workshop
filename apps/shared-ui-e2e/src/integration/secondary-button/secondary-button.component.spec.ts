describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=secondarybuttoncomponent--primary'),
	);
	it('should render the component', () => {
		cy.get('app-secondary-button').should('exist');
	});
});
