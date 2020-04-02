<template>
  <div class="tabs">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      :closable="canCloseTabs"
      @tab-remove="removeTab"
      @tab-click="bindTab"
    >
      <el-tab-pane
        v-for="item in tabsData"
        :name="item.name"
        :label="item.meta.title"
        :key="item.name"
      />
    </el-tabs>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "menu_tabs",
  data() {
    return {
      tabslist: [
        {
          fullPath: "/home",
          hash: "",
          matched: [],
          meta: { title: "首页" },
          name: "home",
          params: {},
          path: "/home",
          query: {}
        }
      ]
    };
  },
  created() {
    let a = this.tabslist.filter(i => i.name == this.$route.name).length;
    if (!a) this.tabslist.push(this.$route);
  },
  methods: {
    removeTab(targetName) {
      if (targetName === "home") return;
      let index = _.findIndex(this.tabslist, o => o.name === targetName);
      this.tabslist.splice(index, 1);
      this.$router.push({ name: this.tabslist[index - 1].name });
    },
    bindTab(data) {
      this.$router.push({ name: data.name });
    },
    getPath() {
      let item = this.$route;
      let list = this.tabslist;
      if (this.$route.name == "home") return;
      list.forEach(i => {
        if (i.name != this.$route.name) {
          list.push(item);
        }
      });
      this.tabslist = _.uniqBy(list, e => e.name);
    }
  },
  computed: {
    tabsData() {
      return this.tabslist;
    },
    canCloseTabs() {
      return this.editableTabsValue !== "home" ? true : false;
    },
    editableTabsValue: {
      get() {
        return this.$route.name || "home";
      },
      set() {}
    }
  },
  watch: {
    $route: "getPath"
  }
};
</script>
