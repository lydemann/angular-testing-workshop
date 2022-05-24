import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { SelectModule } from './select.module';

export default {
	title: 'SelectComponent',
	component: SelectComponent,
	decorators: [
		moduleMetadata({
			imports: [SelectModule, BrowserAnimationsModule],
		}),
	],
} as Meta<SelectComponent>;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	placeholder: '',
};
