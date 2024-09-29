<script setup>
import { markRaw } from 'vue';
import Heading from '@/components/Heading.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button.vue';
import Counter from '@/components/Counter.vue';
import UserInfo from '@/components/UserInfo.vue';

const props = defineProps({
  layout: Array,
});

/**
 * this will get executed and get the component in a state
 */
const state = markRaw({
  components: {
    Heading,
    Image,
    Button,
    Counter,
    UserInfo,
  },
});
</script>

<template>
  <div>
    <div v-for="(item, index) in props.layout" :key="index" class="content">
      <template v-if="item.type === 'component'">
        <component :is="state.components[item.componentName]" v-bind="item.props"></component>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  &:not(:first-child) {
    padding-top: 30px;
  }
}
</style>
