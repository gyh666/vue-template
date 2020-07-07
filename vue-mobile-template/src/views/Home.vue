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
  },
  async created() {
    // 获取 vuex 值
    // console.log(this.$store.getters.userinfo);
    // 接口调用 演示
    const { code, msg, data } = await this.$api.getAdvList({
      advLocation: 1,
      platShow: 1
    });
    if (code != 200) return this.$toast.fail(msg);
    console.log(data);
  }
};
</script>

<style lang="less" scoped>
// .home {}
</style>
