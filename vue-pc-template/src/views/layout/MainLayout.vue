<template>
  <div class="layout">
    <el-container class="layout-box">
      <el-header :style="{ backgroundColor: $store.state.navColor }">
        <header-bar />
      </el-header>
      <div class="flex-row between container">
        <el-aside
          class="aside-bar"
          :width="`${collapseValue ? '62px' : '200px'}`"
          :style="{ backgroundColor: $store.state.navColor }"
        >
          <side-bar />
        </el-aside>
        <el-container class="main-container">
          <menu-tabs v-if="tabsFlag" />
          <breadcrumb v-else />
          <el-main class="content">
            <router-view></router-view>
            <!-- <el-footer>
              <footer-bar />
            </el-footer> -->
          </el-main>
        </el-container>
      </div>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import SideBar from "./components/SideBar";
// import FooterBar from "./components/FooterBar";
import Breadcrumb from "./components/Breadcrumb";
import MenuTabs from "./components/MenuTabs";
// import db from "@/utils/localstorage";

export default {
  name: "main-layout",
  components: {
    HeaderBar,
    SideBar,
    // FooterBar,
    Breadcrumb,
    MenuTabs
  },
  computed: {
    collapseValue() {
      return Boolean(this.$store.state.collapseValue);
    },
    tabsFlag() {
      return Boolean(this.$store.state.tabsFlag);
    }
  },
  data() {
    return {
      showTabs: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@css/common.scss";

.layout {
  background-color: #f2f2f2;

  .layout-box {
    width: 100%;
    height: 100%;

    .container {
      width: 100%;
      height: 100%;

      .aside-bar {
        transition: 0.3s ease-in-out;
      }

      .main-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .content {
        flex: 1;
      }

      .el-aside {
        @include clearScrollBar;
      }

      .el-main {
        padding-top: 0;
        @include clearScrollBar;

        .page {
          width: 100%;
          height: 100%;
          // height: calc(100% - 60px);
          overflow-y: scroll;
          @include clearScrollBar;
        }
      }
    }
  }
}
</style>
