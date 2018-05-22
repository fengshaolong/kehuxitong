
<template>
<div>
    <div class="bg">
    <img src="./QQ图片20180517101037.jpg" alt="">

  </div>
  <div class="con" action="?" method="POST" onsubmit="return checkall();">
    <p>恒逸客户分层分级系统</p>
    <div class="user">
      <input type="text" placeholder="账号" name="username" id="use" onblur="checkname()"><span id='s1'></span>
    </div>
    <div class="psd">
      <input type="password" placeholder="密码" onblur="checkpwd();" name="password" id="psd"><span id='s2'></span>
    </div>
    <div class="btn">
      <input type="submit" value="登录" class="bn" id="butt" />
    </div>
  </div>
</div>
</template>

<script>
// // 登录
//     function $(id) {
//       return document.getElementById(id);
//     }
//     //验证姓名
//     function checkname() {
//       var name = $("use").value;
//       if (name == '') {
//         $('s1').innerHTML = '姓名不能为空';
//         $('s1').style.color = 'red';
//         return false;
//       }
//       else {
//         $('s1').innerText = 'ok';
//         $('s1').style.color = 'green';
//         return true;
//       }
//     }
//     //验证密码
//     function checkpwd() {
//       var password = $("psd").value;
//       if (password == '') {
//         $('s2').innerHTML = '密码不能为空';
//         $('s2').style.color = 'red';
//         return false;
//       }
//       else {
//         $('s2').innerHTML = 'ok';
//         $('s2').style.color = 'green';
//         return true;
//       }
//     }
//     //验证所有表单提交
//     function checkall() {
//       if (checkname() && checkpwd()) {
//         return true;
//       }
//       else {
//         return false;
//       }
//     }
</script>


<style>

</style>

