describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=fabcomponent--primary&args=mini:false;icon;disabled:false;size:md;theme:primary;',
		),
	);
	it('should render the component', () => {
		cy.get('app-fab').should('exist');
	});
});
