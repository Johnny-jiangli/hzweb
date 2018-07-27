<template>
    <p>hellodsaaaaaaaaaaaaaaaaaaaa</p>
</template>

<script>
    export default {
        name: "test",
      mounted(){
        this.$axios.interceptors.request.use(function (config) {
          console.log('在请求之前执行')
          return config
        },function (error) {
          console.log('cuowu000')
          return Promise.reject(error)
        });
        this.$axios.interceptors.response.use(function (res) {
          console.log(('响应之前'))
          return res
        },function (error) {
          console.log('cuowu')
          return Promise.reject(error)
        });
          const CancelToken =this.$axios.CancelToken;
          const source = CancelToken.source();

        this.$axios.post("/device/findList",{
          pageNum:1,
          pageSize:10
        })
          .then(res=>{
            console.log(res.data.data)
          })
          .catch(err=>{
            console.log(err)
          });
        this.$axios.get('/device/findById',{
          cancelToken:source.token,
          params:{
            deviceId:1
          }
        }).then(function (res) {
          console.log('/device/findById');
          console.log(res)
        }).catch(function (err) {
          console.error(err)
        });

      }
    }
</script>

<style scoped>

</style>
