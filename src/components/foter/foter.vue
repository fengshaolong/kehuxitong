<template>
  <div>
    <div class="footer">
    <el-pagination  
      :page-size="12" 
      layout="total, prev, pager, next, jumper" 
      :total="total">
    </el-pagination>
    
    </div>

     
  </div>
</template>

<script>
import Bus from '../../assets/js/bus'
export default {
  data() {
    return {
       total:100
    }
  },
  mounted(){
    let self=this
    Bus.$on('txt',function(total){
      self.total=total
    })
  },
   methods: {
     test(){
       console.log('测试中')
       Bus.$on('txt',function(total){
      this.total=total
      // console.log(this.total)
    })
     }
  }
}



</script>
<style>

</style>

