import { Component, Input, OnDestroy } from '@angular/core';

export const SPINNER_REFRESH_TIP_TIME_THRESHOLD = 1000 * 60;

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnDestroy {
	@Input() public message = '';

	@Input() spinnerRefreshTip = 'It is taking some time, consider refreshing...';
	@Input() spinnerTimeThreshold = SPINNER_REFRESH_TIP_TIME_THRESHOLD;
	showSpinnerRefreshTip = false;

	private timeout: NodeJS.Timeout;

	constructor() {
		this.timeout = setTimeout(() => {
			this.showSpinnerRefreshTip = true;
		}, SPINNER_REFRESH_TIP_TIME_THRESHOLD);
	}

	ngOnDestroy(): void {
		clearTimeout(this.timeout);
	}
}
