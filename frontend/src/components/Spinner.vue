<template>
  <div v-if="isActive" class="text-center">
    <b-spinner
      variant="primary"
      label="Text Centered"
      style="width: 5rem; height: 5rem"
    ></b-spinner>
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    isActive: Boolean,
  },
};
</script>

<style scoped></style>
