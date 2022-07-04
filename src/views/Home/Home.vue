<template>
  <div id="home">
    <el-row>
      <el-col :span="8" class="im">
        <div class="grid-content gird bg-purple">
          <div class="block">
            <el-avatar :size="200"
              ><img src="@/assets/1.jpg" alt=""
            /></el-avatar>
          </div>
          <div style="display: inline-block; text-align: center; width: 200px">
            <h3>Admin</h3>
            <p>管理员</p>
          </div>
        </div>
        <p class="po">上次登录时间:<span>2022-7-3</span></p>
        <p class="pt">上次登录地点:<span>新乡</span></p>
      </el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <el-col :span="6" class="o" v-for="item in lis" :key="item.bg">
            <el-card shadow="never">
              <div>
                {{ item.uname }}
              </div>
            </el-card>
          </el-col>
        </div></el-col
      >
      <el-col :span="13"><div>123</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="uname" label="小名" width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="13"><div>123</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王虎",
          uname: "王小虎",
        },
        {
          date: "2016-05-02",
          name: "王虎",
          uname: "王小虎",
        },
        {
          date: "2016-05-02",
          name: "王虎",
          uname: "王小虎",
        },
      ],
      lis: [
        {
          uname: "第一",
        },
        {
          uname: "第二",
        },
        {
          uname: "第三",
        },
      ],
    };
  },
};
</script>

<style>
.el-row {
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 60px;
}
.im {
  width: auto;
  height: auto;
  background-color: #fff;
  padding: 20px 0 20px 20px;
}
.gird {
  width: 90%;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
p {
  margin-top: 10px;
  color: #ccc;
  font-size: 10px;
}
p span {
  margin-left: 50px;
}

.o {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
