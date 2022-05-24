import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { IconModule } from './icon.module';

export default {
	title: 'IconComponent',
	component: IconComponent,
	decorators: [
		moduleMetadata({
			imports: [IconModule],
		}),
	],
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	icon: '',
};
