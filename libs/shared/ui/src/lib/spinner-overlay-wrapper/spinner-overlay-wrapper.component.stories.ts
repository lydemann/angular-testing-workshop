import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SpinnerOverlayWrapperComponent } from './spinner-overlay-wrapper.component';

export default {
	title: 'SpinnerOverlayWrapperComponent',
	component: SpinnerOverlayWrapperComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		}),
	],
} as Meta<SpinnerOverlayWrapperComponent>;

const Template: Story<SpinnerOverlayWrapperComponent> = (
	args: SpinnerOverlayWrapperComponent,
) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
