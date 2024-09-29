<script setup>
import { onMounted } from 'vue';
import MetaDataProcessor from '@/components/MetaDataProcessor.vue';
import { useStore } from '@/stores/store';

const store = useStore();

/**
 * this will get executed before the component is mounted
 * and will load the product showcase metadata
 */
onMounted(() => {
  store.loadProductShowcaseMetadata();
});
</script>

<template>
   <div v-if="store.isDataFetched">
    <MetaDataProcessor :layout="store.layout" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style lang="scss" scoped></style>
