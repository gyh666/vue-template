<template>
  <el-drawer title="系统设置" :visible.sync="drawer">
    <div class="container">
      <p>导航栏颜色</p>
      <div>
        <span
          :class="navColor == i ? 'nav-item actived' : 'nav-item'"
          v-for="(i, index) in navBarColorList"
          :key="index"
          :style="{ backgroundColor: i }"
          @click="handleSetNavColor(i)"
        />
      </div>
      <el-divider />
      <p>主题颜色</p>
      <theme-picker />
      <el-divider />
      <p>导航栏位置</p>
      <div class="flex-row">
        <div v-for="i in menuBarList" :class="`nav-pst ${i}`" :key="i">
          <i class="actived" />
        </div>
      </div>
      <div class="flex-row between">
        <p>多页签模式</p>
        <el-switch v-model="tabsFlag" @change="handleSetTabs" />
      </div>
      <div class="flex-row between">
        <p>面包屑模式</p>
        <el-switch v-model="breadcrumbFlag" @change="handleSetBreadcrumb" />
      </div>
    </div>
  </el-drawer>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";
export default {
  name: "setting",
  data() {
    return {
      drawer: false,
      tabsFlag: Boolean(this.$store.state.tabsFlag),
      breadcrumbFlag: false,
      navBarColorList: ["#2E3B4B", "#FFF", "#409EFF"],
      menuBarList: ["vertical"]
    };
  },
  components: { ThemePicker },
  created() {
    this.breadcrumbFlag = !this.tabsFlag;
  },
  methods: {
    handleOpen() {
      this.drawer = true;
    },
    handleSetTabs() {
      this.breadcrumbFlag = !this.tabsFlag;
      this.saveFlag();
    },
    handleSetBreadcrumb() {
      this.tabsFlag = !this.breadcrumbFlag;
      this.saveFlag();
    },
    saveFlag() {
      this.$store.dispatch("tabsFlagAction", this.tabsFlag);
    },
    handleSetNavColor(i) {
      console.log(i);
      this.$store.dispatch("navColorAction", i);
    }
  },
  computed: {
    navColor() {
      return this.$store.state.navColor;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20px;
  position: relative;
  width: 100%;
  height: 100%;

  p {
    font-size: 16px;
    color: #444;
    line-height: 2.5;
  }

  .el-switch {
    margin-top: 10px;
  }

  .btn-group {
    position: absolute;
    bottom: 50px;
    left: 0;
  }

  .nav-item {
    width: 30px;
    height: 30px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 20px;
    position: relative;

    &.actived {
      position: relative;
      &:before {
        width: 14px;
        height: 20px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        content: "\2714";
        color: #008100;
      }
    }
  }

  .nav-pst {
    width: 60px;
    height: 40px;
    position: relative;
    border-radius: 3px;
    background-color: #d2d2d2;
    box-shadow: 0 0 5px #ccc;
    margin: 10px 20px 10px 0;

    &::before {
      display: inline-block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background-color: #fff;
    }

    &.vertical::after {
      display: inline-block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 40px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: #2e3b4b;
    }

    .actived {
      width: 14px;
      height: 20px;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      &:before {
        content: "\2714";
        color: #008100;
      }
    }
  }
}
</style>
