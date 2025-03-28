// src/stories/Input.stories.ts
import InputComponent from '@components/base/Input/index.vue';
import type { StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    value: { control: 'text' },
  },
};

const Template: StoryFn = (args) => ({
  components: { InputComponent },
  setup() {
    return { args };
  },
  template: '<InputComponent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  value: 'Hello world',
};
