describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=togglecomponent--primary&args=isIcon;labelPosition:after;labelTextOn;labelTextOff;disabled:false;checked:false;',
		),
	);
	it('should render the component', () => {
		cy.get('app-toggle').should('exist');
	});
});
