describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=spinnercomponent--primary&args=message;spinnerRefreshTip:It+is+taking+some+time,+consider+refreshing...;spinnerTimeThreshold;',
		),
	);
	it('should render the component', () => {
		cy.get('app-spinner').should('exist');
	});
});
