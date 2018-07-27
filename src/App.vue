<template>
  <div id="app">
    <site-index-nav></site-index-nav>
    <router-view/>
  </div>
</template>

<script>
  import SiteIndexNav from './components/siteIndexNav'
export default {
  name: 'App',
  components:{
    SiteIndexNav
  }
  ,
  data() {
    return {
    }
  },


}
</script>

<style>

</style>
