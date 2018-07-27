<template>
  <div class="container-fluid">
    <site-menu></site-menu>
    <div class="menu">
      <Add></Add>
    </div>

    <div class="container-fluid">
      <index></index>
    </div>
  </div>
</template>

<script>

import Index from '../views/index'
import SiteMenu from '../components/siteMenu'
import Add from '../components/basis/add'
  export default {
    name: "siteTable",
    components: { Index,SiteMenu,Add}
    // data() {
    //   return {
    //     deviceList: this.tableData
    //   }
    // },
    // methods:{
    //   saveData:function (){
    //     this.$axios.post('/device/save',{deviceId:1}).then(function (res) {
    //      console.log(res)
    //     }).catch(function (err) {
    //       console.log('保存失败')
    //     })
    //   }
    // },
    // watch:{
    //
    // },
    // computed:{
    //
    //   modalMore:function (index,key) {
    //    return key ?  key+'modalMore'+index : 'modalMore'+index;
    //   },
    //   modalEdit:function (index,key) {
    //     return key ?  key+'modalEdit'+index : 'modalEdit'+index;
    //   },
    //   modalDelete:function (index,key) {
    //     return key ?  key+'modalDelete'+index : 'modalDelete'+index;
    //   },
    // },
    // mounted() {
    //   this.$axios.post("/device/findList", {
    //     pageNum: 1,
    //     pageSize: 10
    //   })
    //     .then(res => {
    //       console.log('res.data')
    //       console.log(res)
    //       console.log(res.data)
    //       this.deviceList = res.data.data;
    //       console.log('这是res.data.data')
    //       console.log(this.deviceList)
    //       console.log()
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },

  }
</script>
<style scoped>
.menu{
  margin: 20px 18px;
}
</style>
