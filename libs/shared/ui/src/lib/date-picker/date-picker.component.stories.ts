import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerModule } from './date-picker.module';

export default {
	title: 'DatePickerComponent',
	component: DatePickerComponent,
	decorators: [
		moduleMetadata({
			imports: [DatePickerModule],
		}),
	],
} as Meta<DatePickerComponent>;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	errorMessage: 'Invalid input',
	placeholder: 'Choose a date',
	showError: '',
};
