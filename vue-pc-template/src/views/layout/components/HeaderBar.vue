<template>
  <div class="header">
    <img
      class="h-logo"
      v-if="!collapseValue"
      src="../../../assets/images/header_logo.png"
    />
    <div class="content flex-row between">
      <span @click="handleCollapseValue">
        <svg-icon icon-class="list" :style="{ color: textColor }" />
      </span>
      <el-dropdown @command="handleCommand">
        <div class="avatar-dropdown">
          <el-avatar size="small" :src="avatarImg" />
          <span class="user-name" :style="{ color: textColor }">
            {{ username }}
          </span>
          <i
            class="el-icon-arrow-down el-icon--right"
            :style="{ color: textColor }"
          />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">
            <svg-icon icon-class="user" />
            个人中心
          </el-dropdown-item>
          <el-dropdown-item command="setting">
            <svg-icon icon-class="setting" />
            系统设置
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <svg-icon icon-class="logout" />
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <setting ref="setting" />
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth.js";
import Setting from "./Setting";

export default {
  name: "header-bar",
  data() {
    return {
      username: this.$store.state.user.name,
      avatarImg: this.$store.state.user.avatar,
      collapseValue: Boolean(this.$store.state.collapseValue)
    };
  },
  components: { Setting },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "personal":
          this.$router.push({ name: "personal" });
          break;
        case "logout":
          removeToken();
          this.$router.push({ name: "login" });
          break;
        case "setting":
          // this.$router.push({ name: "setting" });
          this.$refs.setting.handleOpen();
          break;
        default:
          break;
      }
    },
    logout() {
      removeToken();
      this.$router.push({ name: "login" });
    },
    handleCollapseValue() {
      this.collapseValue = !this.collapseValue;
      this.$store.dispatch("collapseValueAction", this.collapseValue);
    }
  },
  computed: {
    textColor() {
      return this.$store.state.navColor != "#FFF" ? "#fff" : "#2E3B4B";
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  display: flex;
  width: 100%;
  height: 100%;

  .h-logo {
    width: auto;
    height: 45px;
    margin-top: 7.5px;
    margin-right: 31px;
  }

  .content {
    flex: 1;
    // margin-left: 31px;

    .svg-icon {
      color: #fff;
      font-size: 2em;
      margin-top: 15px;
    }

    .el-dropdown {
      height: 40px;
      margin-top: 10px;
    }

    .avatar-dropdown {
      height: 40px;
      line-height: 40px;
      color: #fff;

      .el-avatar {
        position: absolute;
        top: 6px;
        left: 0;
      }

      .user-name {
        margin: 0 10px 0 40px;
      }
    }
  }
}
</style>
