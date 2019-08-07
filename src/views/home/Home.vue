<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { apiTestGet } from "@/utils/api";

export default {
  name: "home",
  data() {
    return {
      form: {
        page: 1,
        count: 2,
        type: "video"
      },
      result: []
    };
  },
  created() {
    this.login();
  },
  methods: {
    async login() {
      let { code, message, result } = await apiTestGet(this.form);
      console.log(result);
      if (code !== 200) return this.$message(message);
      this.result = result;
    }
  }
};
</script>
