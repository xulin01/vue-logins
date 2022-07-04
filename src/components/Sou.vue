<template>
  <div id="sou">
    <div class="left">
      <template>
        <el-button type="primary" round>添加用户</el-button>
      </template>
    </div>

    <div class="right">
      <el-form ref="form" :model="form" label-width="80px">
        <el-input v-model="form.name"></el-input>
      </el-form>
      <el-button icon="el-icon-search" circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
      ape: "add",
      isShow: false,
    };
  },
  methods: {},
};
</script>

<style lang="less">
#sou {
  width: 100%;
  display: flex;
}
#sou .left {
  width: 80%;
  margin-bottom: 50px;
}
#sou .right {
  height: 40px;
  display: flex;
  .el-form {
    height: 40px;
  }
}
</style>
