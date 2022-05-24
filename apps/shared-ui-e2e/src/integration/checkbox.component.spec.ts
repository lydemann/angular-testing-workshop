describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=checkboxcomponent--primary&args=label;disabled:false;checked:false;labelPosition:after;indeterminate:false;',
		),
	);
	it('should render the component', () => {
		cy.get('app-checkbox').should('exist');
	});
});
