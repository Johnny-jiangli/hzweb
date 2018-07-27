<template>

</template>

<script>
    export default {
        name: "DevicePage",
      data(){
        return{
          listData:[]
        };
      },
      mounted(){
        this.$axios.post("/device/findList",{
          pageNum:1,
          pageSize:10
        })
          .then(res=>{
            console.log(res.data.data)
            this.listData = res.data;
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }

</script>

<style scoped>

</style>
