<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  level: {
    type: Number,
    default: 1,
  },
});

const header = computed(() => `h${props.level}`);

</script>

<template>
  <component :is="header">{{ props.text }}</component>
</template>

<style lang="scss" scoped></style>
