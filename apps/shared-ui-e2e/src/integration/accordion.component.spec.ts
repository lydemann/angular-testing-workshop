describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=accordioncomponent--primary&args=boldTitle;normalTitle;isExpanded:false;templateRef;',
		),
	);
	it('should render the component', () => {
		cy.get('app-accordion').should('exist');
	});
});
