describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=buttoncomponent--primary&args=iconButton:false;text;disabled:false;',
		),
	);
	it('should render the component', () => {
		cy.get('app-button').should('exist');
	});
});
