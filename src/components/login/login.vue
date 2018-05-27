
<template>
<div>
    <div class="bg">
    <img src="./QQ图片20180517101037.jpg" alt="">

  </div>
  <div class="con" action="?" method="POST" onsubmit="return checkall();">
    <p>恒逸客户分层分级系统</p>
    <div class="user">
      <input type="text" v-model="formData.username" placeholder="账号" name="username" id="use"  required /><span id='s1'></span>
    </div>
    <div class="psd">
      <input type="password" v-model="formData.password" placeholder="密码"  name="password" id="psd" required /><span id='s2'></span>
    </div>
    <div class="btn">
      <el-row>
        <el-button type="primary" class="bn" id="butt" @click="handleLogin()"><a href="categoryFirst">登录</a></el-button>
      </el-row>
      <!-- <input type="submit" value="登录" class="bn" id="butt" @click="handleLogin()" /> -->
      <div v-show="isLogedFailed"  role="alert">登陆失败</div>
     
    </div>
  </div>
</div>
</template>

<script>


import { saveToken } from '../../assets/js/auth'


export default {
  
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      isLogedFailed: false
    }
  },

  methods: {
    handleLogin () {
      this.$http.post('/auth', this.formData, {
        nprogress: true
      }).then(res => {
        const status = res.status
        if (status === 201) {
          saveToken(res.data) 
          this.$router.push(this.$route.query.redirect || '/')
        }
      }).catch(err => {
        if (err.response && err.response.status === 401) {
          // window.alert('登陆失败')
          this.isLogedFailed = true
        }
      })
      console.log(this.formData.username)
      
      }
    }
  }
// Vue.prototype.ajax = function (options) {
//   let that = this;
//   let reqData = {};
//   reqData.url = '/api/cms' + options.api;
//   reqData.headers = {
//     "Content-Type": "application/json;charset=utf-8"
//   }
//   reqData.method = 'post';
//   reqData.data = options.data ? options.data : {};

//   axios(reqData).then(function (response) {
//     if (response.data.code == '0') {
//       options.success({
//         suc: true,
//         errCode: '',
//         errMsg: '',
//         data: response.data.data
//       })
//     } else {
//       that.$message.error(response.data.message);
//       options.success({
//         suc: false,
//         errCode: response.data.code,
//         errMsg: response.data.message,
//         data: response.data.data
//       })
//     }
//   }).catch(function (error) {
//     console.log(error)
//   });
// },
//  that.ajax({
//           api: '/user/detail',
//           data: reqData,
//           success: function(res){
//             if(res.suc){
//               let property =  res.data.property;
//               if(property.length){
//                 property.forEach(function(item,index){
//                   for(var key in item){

//                     if(key == "名称"){
//                         that.userName = item[key]
//                     }
//                     let keyValue = {
//                       key: key,
//                       value: item[key]
//                     }
//                     that.userdetailData.push(keyValue)
//                   }
//                 })
//               }
//             }
//             that.userdetailLoding = false;
//           }
//         })
</script>


<style>
  /* @import '../assets' */
</style>

