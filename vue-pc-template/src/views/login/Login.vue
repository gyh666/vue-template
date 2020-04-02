<template>
  <div class="login">
    <el-card>
      <div class="lg-title" :style="{ color: textColor }">登录</div>
      <div class="lg-content">
        <el-form :model="form" :rules="rules" ref="ruleForm">
          <el-form-item prop="loginName">
            <el-input placeholder="账号名称" v-model="form.loginName">
              <!-- <svg-icon slot="prefix" icon-class="user" /> -->
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="账号密码"
              :type="pwdType"
              v-model="form.password"
            >
              <!-- <svg-icon slot="prefix" icon-class="password" /> -->
              <i
                slot="suffix"
                style="font-size: 18px"
                class="el-input__icon el-icon-view"
                @click="handleViewPwd"
              />
            </el-input>
          </el-form-item>
        </el-form>
        <!-- <div class="lg-option flex-row between">
          <span>
            没有账号？
            <em @click="$router.push({ name: 'register' })">
              立即注册
            </em>
          </span>
          <span @click="$router.push({ name: 'forget' })">忘记密码</span>
        </div> -->
        <el-button
          class="lg-btn"
          type="primary"
          :loading="loading"
          @click="login"
        >
          登录
        </el-button>
      </div>
    </el-card>
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
