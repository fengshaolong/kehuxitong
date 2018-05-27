<template>
  <div>
      <div class="sousuokuang">
      <el-input placeholder="请输入内容" v-model="input5" style="hight:34px" class="input-with-select"></el-input>
     <el-button type="primary" icon="el-icon-search" @click="findList()"></el-button>
     
      
  <el-select v-model="value7" filterable clearable  placeholder="产品名">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      
    </el-option>
  </el-select>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bus from '../../assets/js/bus'

// export default {
//   data() {
//     return {
//       // input3: '',
//       input4: '',
//       input5: '',
//       select: ''
//     }
//   }
// }

 export default {
    data() {
      return {
        input5: '',
        options: [{
          value: '选项1',
          label: 'DTY'
        }, {
          value: '选项2',
          label: 'MAN'
        }, {
          value: '选项3',
          label: 'DTNAIY'
        }, {
          value: '选项4',
          label: 'FDY'
        }, {
          value: '选项5',
          label: 'FDHJ'
        }],
        // value8: [],
        value7: []
      }
    },
    mounted() {
    axios.get('/user?ID=12345')
  .then(function (response) {
    // console.log(response);
  })
  .catch(function (response) {
    // console.log(response);
  });
// Optionally the request above could also be done a
},
methods: {
  findList() {
    let total=100
    Bus.$emit('txt',total)
//     var instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
  axios.post('http://192.168.126.168:8081/list/getDetailData', {
    customerName: '海宁市昕航布业有限公司',
    productName: 'FDY',
    pageIndex: 1,
  })
  .then(function (response) {
    // let data=response.data
    // let total=data.data.total;
    // console.log(total)
    // console.log(response);
    console.log(response)
  })
  .catch(function (response) {
    console.log(response);
  });
}
}
}
</script>
<style>

</style>
