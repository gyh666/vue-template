<template>
  <div class="header">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: "项目模板"
    };
  },
  created() {
    this.getActive();
  },
  methods: {
    getActive() {
      this.title = this.$route.meta.title;
    }
  },
  watch: {
    $route: "getActive"
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: @theme-color;
  font-size: 16px;
  font-weight: 600;
}
</style>
