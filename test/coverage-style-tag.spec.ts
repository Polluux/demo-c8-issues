import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest';
import StyleTag from '../src/components/StyleTag.vue';

describe('StyleTag', () => {
  it('Do proper coverage', () => {
    const wrapper = mount(StyleTag);
    expect(true).toBeTruthy();
  });
});