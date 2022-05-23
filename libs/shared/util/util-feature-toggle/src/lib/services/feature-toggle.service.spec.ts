import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { createMagicalMock, Mock } from '@todo/shared/util-test';
import { FeatureToggleService } from './feature-toggle.service';

describe('FeatureToggleService', () => {
	let service: FeatureToggleService;
	let httpService: Mock<HttpClient>;

	beforeEach(() => {
		httpService = createMagicalMock(HttpClient);
		service = new FeatureToggleService(httpService);
	});

	describe('getFeatureFlags', () => {
		it('should get feature flags', done => {
			// TODO: implement test
		});
	});
});
