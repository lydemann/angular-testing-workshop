import { TodoItem } from '@todo/shared/domain';
import moment = require('moment');
import { DuedateTodayCountPipe } from './duedate-today-count.pipe';

describe('DuedateTodayCountPipe', () => {
	describe('transform', () => {
		it('have two task that are due today', () => {
			const pipe = new DuedateTodayCountPipe();
			const todos = [
				new TodoItem('', '', moment().format('YYYY-MM-DD')),
				new TodoItem('', '', moment().format('YYYY-MM-DD')),
				new TodoItem('', ''),
			];
			const res = pipe.transform(todos);
			expect(res).toBe(2);
		});
	});
});
