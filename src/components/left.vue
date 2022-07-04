<template>
  <di id="left">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="coll"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3>{{ coll ? "后台" : "通用后台管理系统" }}</h3>
      <el-menu-item
        @click="Item(item)"
        v-for="item in noChid"
        :key="item.path"
        :index="item.path + ''"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.uname }}</span>
      </el-menu-item>

      <el-submenu v-for="item in chid" :key="item.path" :index="item.path + ''">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.uname }}</span>
        </template>
        <el-menu-item-group v-for="(item, i) in item.children" :key="item.path">
          <el-menu-item @click="Item(item)" :index="i.toString()">{{
            item.uname
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </di>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { uname: "首页", name: "home", path: "/", icon: "s-home" },
        { uname: "商品管理", name: "mall", path: "/mall", icon: "video-play" },
        { uname: "用户管理", name: "user", path: "/user", icon: "user" },
        {
          uname: "其他",
          icon: "location",
          children: [
            {
              path: "/other1",
              name: "other",
              icon: "setting",
              uname: "页面1",
            },
            {
              path: "/other2",
              name: "other",
              icon: "setting",
              uname: "页面2",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChid() {
      return this.list.filter((item) => !item.children);
    },
    chid() {
      return this.list.filter((item) => item.children);
    },
    coll() {
      return this.$store.state.coll;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    Item(item) {
      this.$router.push({ path: item.path, component: item.name });
      this.$store.commit("tab", item);
    },
  },
};
</script>

<style lang="less" scoped>
#left {
  width: auto;
  min-width: 64px;
  height: 100%;
  .el-menu-item {
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
  }
  h3 {
    margin-bottom: 30px;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
  }
}

.el-menu {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  min-width: 64px;
}
</style>
