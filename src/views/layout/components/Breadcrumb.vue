<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in levelList"
      :key="item.path"
      :to="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      levelList: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== "home") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
    }
  },
  watch: {
    $route: "getBreadcrumb"
  }
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  // position: absolute;
  line-height: 40px;
  margin: 17px 25px 3px;
}
</style>
