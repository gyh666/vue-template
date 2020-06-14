<template>
  <div class="home">
    <test />
    <svg-icon icon-class="home" />
    <p>view：{{ test | formateNumber }}</p>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: "Home",
  data() {
    return {
      test: this.$store.getters.test
    }
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let params = {
        advLocation: 1,
        platShow: 1
      }
      const { code, msg, data } = await api.home.getAdvList(params);
      console.log(code, msg, data);
    }
  },
};
</script>
