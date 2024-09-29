import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import userProfile from '@/views/userProfile.vue';
import MetaDataProcessor from '@/components/MetaDataProcessor.vue';
import { useStore } from '@/stores/store';
import { nextTick } from 'vue';

// Mock the store
vi.mock('@/stores/store', () => ({
  useStore: vi.fn(() => ({
    loadUserProfileMetadata: vi.fn(),
    isDataFetched: false,
    layout: {},
  })),
}));

describe('userProfile', () => {
  let store;

  beforeEach(() => {
    // Create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to app.use(pinia)
    setActivePinia(createPinia());

    // Get a fresh store instance
    store = useStore();
  });

  it('displays loading message when data is not fetched', () => {
    store.isDataFetched = false;
    const wrapper = mount(userProfile);
    expect(wrapper.text()).toContain('Loading...');
    expect(wrapper.findComponent(MetaDataProcessor).exists()).toBe(false);
  });
});
