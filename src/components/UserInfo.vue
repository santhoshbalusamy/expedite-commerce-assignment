<script setup>
import { computed } from 'vue';
import { useStore } from '@/stores/store';

const store = useStore();

const props = defineProps({
  username: String,
  email: String,
  dataKey: String,
});

/**
 * The isEditMode variable is a computed property that returns the value of the dataKey property from the store.
 * This property is used to determine whether the user information is displayed in edit mode or view mode. If the dataKey * property is true, it means the user information is in edit mode.
 */
const isEditMode = computed(() => store.data[props.dataKey]);

</script>

<template>
  <div>
    <div v-if="!isEditMode">
      <p>Username: {{ props.username }}</p>
      <p>Email: {{ props.email }}</p>
    </div>
    <div v-else class="edit-user">
      <p>Edit User Info</p>
      <div>
        <label>User Name</label>
        <input type="text" :value="props.username" />
      </div>
      <div>
        <label>User Email</label>
        <input type="email" :value="props.email" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit-user {
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  width: 300px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
}
</style>
