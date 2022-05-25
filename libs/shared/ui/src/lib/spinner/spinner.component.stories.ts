import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
	SpinnerComponent,
	SPINNER_REFRESH_TIP_TIME_THRESHOLD,
} from './spinner.component';
import { SpinnerModule } from './spinner.module';

export default {
	title: 'SpinnerComponent',
	component: SpinnerComponent,
	decorators: [
		moduleMetadata({
			imports: [SpinnerModule],
		}),
	],
} as Meta<SpinnerComponent>;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
	props: args,
});

export const Primary: Story<SpinnerComponent> = Template.bind({});
Primary.args = {
	message: 'Loading...',
	spinnerRefreshTip: 'It is taking some time, consider refreshing...',
	spinnerTimeThreshold: SPINNER_REFRESH_TIP_TIME_THRESHOLD,
};
