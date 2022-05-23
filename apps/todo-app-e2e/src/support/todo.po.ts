import { todoList } from '../fixtures/todo-list';

export class TodoPage {
	public static goToPage() {
		cy.visit('/');
	}

	public static createTodoItem() {
		// TODO: implement
	}

	static deleteTodoItem() {
		// TODO: implement
	}

	static editTodoItem() {
		// TODO: implement
	}

	public static checkForTodos() {
		cy.get('[data-test=todo-item]').should('have.length', 5);
	}
}
