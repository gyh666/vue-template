<!--
 * @Description: 
 * @Version: 
 * @Author: 
 * @Date: 2020-11-30 11:27:30
 * @LastEditors: 
 * @LastEditTime: 2020-11-30 16:03:14
-->
<template>
  <div class="error">
    <template v-if="notFound">
      <img class="pic" src="@/assets/images/404.png" />
      <p>很抱歉，资源未找到</p>
    </template>
    <template v-else>
      <img class="pic" src="@/assets/images/403.gif" />
      <p>很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notFound: true
    };
  },
  methods: {
    getActive() {
      console.log(this.$route.name.includes("notFound"));
      this.notFound = this.$route.fullPath.includes("notFound");
    }
  },
  created() {
    this.getActive();
  }
};
</script>

<style lang="less" scoped>
.error {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: @theme-color;
  .pic {
    width: 60%;
    margin-bottom: 50px;
  }
  p {
    width: 60%;
    line-height: 1.5;
    text-align: center;
  }
}
</style>
