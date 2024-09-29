<script setup>
import { useStore } from '@/stores/store';

const store = useStore();

const props = defineProps({
  text: String,
  action: String,
});

/**
 * This will get executed when the button click and call the execute method in the store.
 */
const handleClick = () => {
  store.executeMethod(props.action);
};
</script>

<template>
  <button type="button" @click="handleClick">{{ text }}</button>
</template>

<style lang="scss" scoped></style>
