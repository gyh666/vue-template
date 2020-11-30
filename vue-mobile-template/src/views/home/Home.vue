<template>
  <div class="home">
    <van-grid :gutter="10">
      <van-grid-item
        v-for="r in routers"
        :key="r.text"
        :icon="r.icon"
        :to="r.href"
        :text="r.text"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      routers: [
        { icon: "home-o", text: "首页", href: "/" },
        { icon: "cluster-o", text: "列表", href: "/list" },
        { icon: "contact", text: "登录", href: "/login" },
        { icon: "bulb-o", text: "403", href: "/forbidden" },
        { icon: "warn-o", text: "404", href: "/notFound" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
// .home {}
</style>
