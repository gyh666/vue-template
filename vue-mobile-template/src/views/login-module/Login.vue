<template>
  <van-form
    ref="form"
    :show-error="false"
    :scroll-to-error="true"
    @submit="submit"
  >
    <van-field
      label="用户名"
      v-model="form.username"
      placeholder="用户名"
      :rules="validate.verifyPhone"
    />
    <van-field
      label="密码"
      v-model="form.password"
      placeholder="账号密码"
      :rules="validate.verifyPassword"
    />
    <van-field
      label="验证码"
      v-model="form.code"
      placeholder="短信验证码"
      :rules="validate.verifyCode"
    >
      <template #button>
        <van-button
          class="code"
          size="small"
          type="info"
          @click.stop="handleSendCode"
        >
          {{ codeText }}
        </van-button>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import * as validate from "@/utils/validate";

export default {
  data() {
    return {
      form: {
        username: "13159274575",
        password: "",
        code: ""
      },
      timer: 60,
      isSend: false,
      codeText: "发送验证码",
      validate
    };
  },
  methods: {
    handleSendCode() {
      if (this.isSend) return this.$toast("请勿重复点击");
      this.isSend = true;
      let clock = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
          this.codeText = `${this.timer}s`;
        } else {
          this.isSend = false;
          this.timer = 60;
          this.codeText = "重新发送";
          clearInterval(clock);
        }
      }, 1000);
    },
    submit() {
      console.log("校验通过");
    }
  }
};
</script>

<style lang="less" scoped>
.code {
  transition: ease-in-out 0.5s;
}
</style>
