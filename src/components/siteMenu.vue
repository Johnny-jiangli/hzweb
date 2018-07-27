<template>

    <nav>
      <div class="inner">
        <ul class="nav">
          <li class="active"><router-link to="#"><img src="../assets/img/icon_monitor1.png" alt="">设备管理</router-link></li>
          <li><router-link to="#"><img src="../assets/img/icon_message1.png" alt="">设备布防</router-link></li>
          <li><router-link to="#"><img src="../assets/img/icon_message1.png" alt="">推送设置</router-link></li>
          <li><router-link to="#"><img src="../assets/img/icon_ph_1.png" alt="">底库管理</router-link></li>
        </ul>
      </div>
    </nav>

</template>

<script>
    export default {
        name: "siteMenu"
    }
</script>

<style scoped>
  nav{
    margin-top: -10px;
    margin-bottom: 20px;
    font-size: 16px;
    box-sizing: border-box;
  }
  nav>.inner{
    background: #F5F6FA;
    margin: 0 20px;
    padding-top:10px ;
    border-bottom: #ccc solid 1px;
    /*-webkit-border-radius: 10px;*/
    /*-moz-border-radius: 10px;*/
    /*border-radius: 10px;*/
  }
  nav>.inner li {
    list-style-type: none;
    display: inline-block;

    line-height: 34px;
    text-align: center;
  }
  nav>.inner li>a{
    background: #C6CBD1 ;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius:5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    color: white;
    height: 48px;
    width: 134px;
    display: block;
    margin-right:10px;
  }
  nav>.inner>.nav>.active>a:hover,
  nav>.inner>.nav>.active>a:focus{
    background: #465484;
    color: white;
  }
  nav>.inner li>a:hover,
  nav>.inner li>a:focus
  {
    background: #465484;
    color: white;
  }
</style>
