<template>
  <div class="header">
    <div class="log">
      <img src="./20180517100206.png" alt="">
    </div>
    <div class="right">
      <ul>
        <li>用户名</li>
        <li>
          <el-row>
            <el-button round type="primary"  @click="handleLogout" class="tuichu" id="tuichu">退出</el-button>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
  data() {
    return {
    };
    },
  //   mounted() {
  //     this.handleLogout();
  //  },
   methods: {
    // 处理用户退出
    handleLogout () {
      // window.localStorage.removeItem('bxg-token')

      // this.$http.delete('/auth', {
      //   nprogress: true
      // }).then(res => {
      //   if (res.status === 204) {
      //     this.$router.push('/login')
      //   }
      // })
      this.$router.push('/login')
    },
    }
}

</script>
<style>

</style>

