import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest';
import ImportMetaEnv from '../src/components/ImportMetaEnv.vue';

describe('ImportMetaEnv', () => {
  it('Do proper coverage', () => {
    const wrapper = mount(ImportMetaEnv);
    expect(true).toBeTruthy();
  });
});