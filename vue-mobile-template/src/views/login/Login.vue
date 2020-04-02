<template>
  <div class="login">
    login
  </div>
</template>

<script>
import { apiLogin } from "@/api";
import { setToken } from "@/utils/auth.js";
import db from "@/utils/localstorage";

export default {
  name: "login",
  data() {
    return {
      pwdType: "password",
      form: {
        loginName: "",
        password: ""
      },
      loading: false,
      rules: {
        loginName: { required: true, message: "请输入账号", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" }
      }
    };
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", this.forbidBack);
  },
  destroyed() {
    window.removeEventListener("popstate", this.forbidBack);
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.loading = true;
          let { success, msg, user, accessToken } = await apiLogin(this.form);
          this.loading = false;
          if (!success) return this.$message.error(msg);

          setToken(accessToken, 60 * 60 * 2);
          this.$store.dispatch("userAction", user);
          this.$route.query.redirect
            ? this.$router.push(this.$route.query.redirect)
            : this.$router.replace({ path: "/" });
        }
      });
    },
    handleViewPwd() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
    },
    forbidBack(/* e */) {
      history.pushState(null, null, document.URL);
    }
  },
  computed: {
    textColor() {
      return db.get("themeColor");
    }
  }
};
</script>
