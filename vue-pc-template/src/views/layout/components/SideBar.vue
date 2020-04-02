<template>
  <el-menu
    mode="vertical"
    :background-color="$store.state.navColor"
    :text-color="textColor"
    :active-text-color="themeColor"
    :default-active="defaultActive"
    :collapse="collapseValue"
    :style="{
      width: `${collapseValue ? '62px' : '200px'}`,
      transition: 'all -0.1s ease-in-out'
    }"
    :hide-timeout="700"
    router
  >
    <template v-for="menu in menuList">
      <el-menu-item
        v-if="!menu.children.length"
        :index="`/${menu.menuEnname}`"
        :key="menu.id"
      >
        <svg-icon :icon-class="menu.icon" :style="{ color: textColor }" />
        <span slot="title">
          {{ menu.menuName }}
        </span>
      </el-menu-item>

      <el-submenu v-else :index="`/${menu.menuEnname}`" :key="menu.id">
        <template slot="title">
          <svg-icon :icon-class="menu.icon" :style="{ color: textColor }" />
          <span slot="title">{{ menu.menuName }}</span>
        </template>

        <template v-for="child in menu.children">
          <el-menu-item
            v-if="!child.children.length"
            :key="child.id"
            :index="`/${menu.menuEnname}/${child.menuEnname}`"
          >
            <span slot="title">{{ child.menuName }}</span>
          </el-menu-item>

          <el-submenu
            v-else
            :key="child.id"
            :index="`/${menu.menuEnname}/${child.menuEnname}`"
          >
            <template slot="title">
              {{ child.menuName }}
            </template>

            <template v-for="subchild in child.children">
              <el-menu-item
                :key="subchild.id"
                :index="
                  `/${menu.menuEnname}/${child.menuEnname}/${subchild.menuEnname}`
                "
              >
                <span slot="title">{{ subchild.menuName }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
// import { apiGetMenu } from "@/api";

export default {
  name: "side-bar",
  data() {
    return {
      menuList: [
        {
          id: 1,
          menuEnname: "home",
          path: "/home",
          menuName: "首页",
          icon: "home",
          children: []
        },
        {
          id: 2,
          menuEnname: "order",
          path: "/order",
          menuName: "消费记录",
          icon: "order",
          children: [
            {
              id: 21,
              menuEnname: "order_pay",
              path: "/order_pay",
              menuName: "充值记录",
              icon: null,
              children: []
            },
            {
              id: 22,
              menuEnname: "order_buy",
              path: "/order_buy",
              menuName: "购买记录",
              icon: null,
              children: []
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      // let menu = await apiGetMenu({});
      // let home = {
      //   id: 0,
      //   menuEnname: "home",
      //   path: "/home",
      //   menuName: "首页",
      //   icon: "home",
      //   children: []
      // };
      // this.menuList = menu;
      // this.menuList.unshift(home);
      this.$store.dispatch("menuListAction", this.menuList);
    }
  },
  computed: {
    collapseValue() {
      return Boolean(this.$store.state.collapseValue);
    },
    defaultActive() {
      let active = this.$route.path;
      return active;
    },
    textColor() {
      return this.$store.state.navColor != "#FFF" ? "#fff" : "#2E3B4B";
    },
    themeColor() {
      return "#ffd04b";
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  color: #fff;
  font-size: 1.2em;
  margin-right: 5px;
  // color: #333;
}

.el-menu {
  height: 100%;
}

.el-menu-item.is-active {
  .svg-icon {
    color: #ffd04b !important;
  }
}
</style>
