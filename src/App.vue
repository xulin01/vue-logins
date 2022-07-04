<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Stor></Stor>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Left from "@/components/left.vue";
import Main from "@/components/main.vue";
import Header from "@/components/Header.vue";
import Stor from "@/components/stor.vue";

export default {
  components: { Left, Main, Header, Stor },
  methods: {},
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #ccc;
}

.el-aside {
  min-width: 64px;
}
</style>
