describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=spinneroverlaywrappercomponent--primary'),
	);
	it('should render the component', () => {
		cy.get('app-spinner-overlay-wrapper').should('exist');
	});
});
