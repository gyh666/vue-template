<template>
  <div class="empty-page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "empty_page"
};
</script>

<style lang="scss" scoped>
.empty-page {
  width: 100%;
  height: 100%;
}
</style>
