<template>
  <div id="stor">
    <el-tag
      v-for="(item, index) in tig"
      :key="item.name"
      :closable="item.name !== 'home'"
      :effect="$route.path === item.path ? 'dark' : 'plain'"
      @click="changes(item)"
      @close="mol(item, index)"
      >{{ item.uname }}</el-tag
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({ tig: (state) => state.tabList }),
  },
  methods: {
    ...mapMutations({ dest: "des" }),
    changes(item) {
      this.$router.push({ path: item.name });
    },
    mol(item, index) {
      const length = this.tig.length - 1;
      const na = this.$route.path.slice(1);

      this.dest(item);
      if (item.name !== na) {
        return;
      }
      if (index === length) {
        this.$router.push({ path: this.tig[index - 1].name });
      } else {
        this.$router.push({ path: this.tig[index].name });
      }
    },
  },
};
</script>

<style>
#stor {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
}
.el-tag {
  margin-left: 6px;
  cursor: pointer;
}
</style>
