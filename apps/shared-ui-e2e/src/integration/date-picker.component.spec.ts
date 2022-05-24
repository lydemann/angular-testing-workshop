describe('shared-ui', () => {
	beforeEach(() =>
		cy.visit(
			'/iframe.html?id=datepickercomponent--primary&args=date;minDate;maxDate;errorMessage:Invalid+input;placeholder:Choose+a+date;showError;',
		),
	);
	it('should render the component', () => {
		cy.get('app-date-picker').should('exist');
	});
});
