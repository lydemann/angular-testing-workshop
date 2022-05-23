import { waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TodoItem } from '@todo/shared/domain';
import { AddTodoComponent, AddTodoReactiveFormsModule } from '@todo/shared/ui';
import { TodoListFacadeService } from '@todo/todo-app/domain';
import { TestingModule } from '@todo/todo-app/testing-util';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list.component';
import { DuedateTodayCountPipe } from './duedate-today-count/duedate-today-count.pipe';

describe('TodoListComponent', () => {
  let spectator: Spectator<TodoListComponent>;
  const createComponent = createComponentFactory({
    component: TodoListComponent,
    declarations: [AddTodoComponent, DuedateTodayCountPipe],
    imports: [
      FormsModule,
      TranslateModule.forRoot(),
      SharedModule,
      AddTodoReactiveFormsModule,
      TestingModule,
    ],
    providers: [
      mockProvider(TodoListFacadeService, {
        todoList$: of([]),
        isLoading$: of(false),
      }),
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  describe('get todo list', () => {
    it('should show three todo items', waitForAsync(() => {
      // TODO: implement this test
    }));
  });
});
