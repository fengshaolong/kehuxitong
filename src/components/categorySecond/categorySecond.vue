<template>
  <div >
      <!-- 背景 -->
  <Header></Header>

  <div class="content">
    <!-- 导航栏 -->
    <Fenjidaoheng></Fenjidaoheng>
    <!-- 搜索 客户id 产品名 -->
    <Xiala></Xiala>
    <!-- <div id="test2" style="width:100px hight:100px backgroung-color:red"></div> -->
    <!-- 产品图片 -->
    <Tupian></Tupian>  
    <Foter></Foter>
    

  </div>
      
  </div>
</template>


<script>
import Header from "../header/header";
import Fenjidaoheng from "../fenjidaoheng/fenjidaoheng";
import Xiala from "../xiala/xiala";
import Tupian from "../tupian/tupian";
import Foter from "../foter/foter";

// import echarts from "echarts";
export default {
  // el:'#app',
  data() {
    return {
    };
  },
  components: {
    Header,
    Foter,
    Xiala,
    Fenjidaoheng,
    Tupian
  },
  methods: {
  }
};
</script>

<style>

</style>





