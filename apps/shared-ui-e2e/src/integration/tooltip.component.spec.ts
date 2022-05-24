describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=tooltipcomponent--primary&args=tooltipText;position:below;isOneLine:false;',
		),
	);
	it('should render the component', () => {
		cy.get('app-tooltip').should('exist');
	});
});
