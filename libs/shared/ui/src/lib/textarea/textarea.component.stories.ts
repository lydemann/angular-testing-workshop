import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';
import { TextareaModule } from './textarea.module';

export default {
	title: 'TextareaComponent',
	component: TextareaComponent,
	decorators: [
		moduleMetadata({
			imports: [TextareaModule, BrowserAnimationsModule],
		}),
	],
} as Meta<TextareaComponent>;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	placeholder: '',
};
