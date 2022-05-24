describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit('/iframe.html?id=selectcomponent--primary&args=placeholder;'),
	);
	it('should render the component', () => {
		cy.get('app-select').should('exist');
	});
});
