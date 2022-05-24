describe('shared-ui', () => {
	beforeEach(() => cy.visit('/iframe.html?id=addbuttoncomponent--primary'));
	it('should render the component', () => {
		cy.get('app-add-button').should('exist');
	});
});
