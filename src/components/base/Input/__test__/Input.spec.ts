import InputComponent from '@components/base/Input/index.vue';
import * as testUtils from '@vue/test-utils';

const { mount } = testUtils;

console.log('mount:', mount); // This should log a function

describe('InputComponent', () => {
  it('renders the input with the given value', () => {
    const wrapper = mount(InputComponent, {
      props: { value: 'hello' },
    });
    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('hello');
  });

  it('emits "update:value" when input value changes', async () => {
    const wrapper = mount(InputComponent, {
      props: { value: 'hello' },
    });
    const input = wrapper.find('input');
    await input.setValue('world');
    expect(wrapper.emitted()['update:value']).toBeTruthy();
    expect(wrapper.emitted()['update:value'][0]).toEqual(['world']);
  });
});
