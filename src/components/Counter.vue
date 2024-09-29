<script setup>
import { computed } from 'vue';

import { useStore } from '@/stores/store';

const store = useStore();

const props = defineProps({
  dataKey: String,
});

const count = computed(() => store.data[props.dataKey]);

</script>

<template>
  <div>Count: {{ count }}</div>
</template>

<style lang="scss" scoped></style>
