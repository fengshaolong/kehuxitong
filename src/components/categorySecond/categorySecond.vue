<template>
  <div>
      <!-- 背景 -->
  <div class="header">
    <div class="log">
      <img src="./20180517100206.png" alt="">
    </div>
    <div class="right">
      <ul>
        <li>用户名</li>
        <button style="width:47px; margin-left: 32px" type="submit" class="tuichu" id="tuichu">退出</button>
      </ul>
    </div>
  </div>

  <div class="content">
    <!-- 导航栏 -->
    <div class="nav clearfix">
      <ul>
        <li>
          <a href="categoryFirst.vue">首页</a>
        </li>
        <li>
          <a href="javascript:;">客户分级</a>
          <div class="list">
            <a href="javascript:;">1111</a>
            <a href="javascript:;">1111</a>
            <a href="javascript:;">1111</a>
            <a href="javascript:;">1111</a>
          </div>
        </li>
      </ul>
    </div>
    <!-- 搜索 客户id 产品名 -->
    <div class="sousuokuang">
      <input type="text" placeholder="搜索内容" data-provide="typeahead">

      <select>
              <option selected="selected">客户id</option>
              <option></option>
              <option></option>
          </select>
      <select>
              <option selected="selected">产品名</option>
              <option>DTY</option>
              <option>DTY</option>
              <option>DTY</option>
              <option>DTY</option>
          </select>


    </div>
    <!-- <div id="test2" style="width:100px hight:100px backgroung-color:red"></div> -->
    <!-- 产品图片 -->
    <div class="tupian">
      <ui id="main">
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="pingjia"><span>高</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px;"></div>
          <div class="pingjia"><span>中</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="pingjia"><span>低</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="pingjia"><span>高</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="pingjia"><span>中</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div class="echar" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="pingjia"><span>低</span></div>
        </li>
      </ui>
    </div>

    <div class="footer">
      <button>首页</button>
      <button>尾页</button>
      <button>上一页</button>
      <button>下一页</button>
    </div>
    <div class="teshu">
      <p>当前第<a href="javascript:;">3</a>页</p>
      <p>一共30页</p>
    </div>



  </div>
  </div>
</template>


<script>
//下滑菜单
// var liObj = $(".nav").find("ul>li");
// // console.log(liObj);
// for (let index = 0; index < liObj.length; index++) {
//   liObj[index].onmouseover = function() {
//     $(this)
//       .find(".list")
//       .fadeIn(500);
//     console.log(1);
//   };
//   liObj[index].onmouseleave = function() {
//     $(this)
//       .find(".list")
//       .fadeOut(500);
//   };
// }






// import echarts from "echarts";
// export default{
// data (){
// return {
// msg:"123"
// }
// },
// // console.log(111);
// // console.log(document.getElementById('test2'))
// // console.log(111);
// mounted (){
// //   this.$nextTick(() => {
// //     this.chart = echarts.init(document.getElementsByClassName("echar"));
// // });

// var myChart = this.echarts.init(document.getElementsByClassName("echar"));

// // console.log(document.getElementsByClassName('echar'))

// // for (var i = 0; i < ecObj.length; i++) {
// //   var myChart = echarts.init(ecObj[i]);
// var option = {
//   tooltip: {
//     trigger: "item",
//     formatter: "{a} <br/>{b}: {c} ({d}%)"
//   },
//   legend: {
//     orient: "vertical",
//     x: "left",
//     data: []
//   },
//   series: [
//     {
//       name: "得分加成",
//       type: "pie",
//       radius: ["20%", "40%"],
//       avoidLabelOverlap: false,
//       label: {
//         normal: {
//           show: true,
//           position: "inside"
//         },
//         emphasis: {
//           show: true,
//           textStyle: {
//             fontSize: "30",
//             fontWeight: "bold"
//           }
//         }
//       },
//       labelLine: {
//         normal: {
//           show: false
//         }
//       },
//       data: [
//         { value: 250, name: "波动性" },
//         { value: 250, name: "利润率" },
//         { value: 250, name: "销售量" },
//         { value: 250, name: "中断次数" }
//       ]
//     }
//   ]
// };
// }
// }
// console.log(myChart.setOption(option));

</script>

<style>

</style>





