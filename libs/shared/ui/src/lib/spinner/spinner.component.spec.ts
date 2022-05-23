import { fakeAsync, tick } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
	let spectator: Spectator<SpinnerComponent>;
	const createComponent = createComponentFactory(SpinnerComponent);

	it('should show show refresh tip after spinner time threshold', fakeAsync(() => {
		// TODO: implement test
	}));
});
