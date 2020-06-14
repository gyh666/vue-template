<template>
  <div>
    login
  </div>
</template>

<script>
import { setToken } from "@/utils/auth.js";
export default {
  data() {
    return {
      password: '123456'
    }
  },
  created() {
    console.log(this.$md5(this.password));
    setToken('accessToken', 60 * 60 * 2);
  }
}
</script>
