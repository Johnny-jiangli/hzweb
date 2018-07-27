<template>
  <form class="form-inline" role="form">
    <button class="btn btn-default" style="border-radius: 5px">新增</button>
    <div class="form-group">
      <label class="sr-only" for="name">名称</label>
      <input type="text" class="form-control" id="name" placeholder="请输入名称">
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox">请打勾
      </label>
    </div>
    <button type="submit" class="btn btn-default">搜索</button>
  </form></template>

<script>
    export default {
        name: "add"
    }
</script>

<style scoped>

</style>
