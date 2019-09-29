<template>
  <div class="layout">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "index-layout"
};
</script>

<style lang="scss" scoped>
@import "@css/vars.scss";

.layout {
  background-color: $loginBgColor;
}
</style>
