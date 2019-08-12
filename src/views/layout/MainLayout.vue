<template>
  <div>
    <header-bar />
    <router-view />
  </div>
</template>

<script>
import headerBar from "./components/HeaderBar";

export default {
  components: { headerBar }
};
</script>
