describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=squarebuttoncomponent--primary&args=buttonType;'),
	);
	it('should render the component', () => {
		cy.get('app-square-button').should('exist');
	});
});
