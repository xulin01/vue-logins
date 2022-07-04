<template>
  <div id="header">
    <div class="left">
      <el-button @click="co" class="el-icon-menu" size="mini"></el-button>

      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in tig"
          :key="item.name"
          :to="{ path: item.path }"
          >{{ item.uname }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    co() {
      this.$store.commit("col");
    },
  },
  computed: {
    ...mapState({ tig: (state) => state.tabList }),
  },
};
</script>

<style lang="less">
#header {
  height: 60px;
  display: flex;
  align-items: center;
}
#header .left {
  width: 90%;
  display: flex;
  .el-breadcrumb {
    color: #fff;
    margin-left: 10px;
    font-size: 15px;
    font-weight: 100;
  }
}
.el-header {
  background-color: #009688;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
