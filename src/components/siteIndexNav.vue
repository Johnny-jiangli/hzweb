<template>
  <div class="container-fluid">
    <div class="row">
        <nav class="navbar navbar-default" id="nav">
          <div class="collapse navbar-collapse col-md-5 col-md-offset-3" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">实时监控<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><router-link to="#">人脸识别</router-link></li>
                  <li><router-link to="#">人脸识别</router-link></li>
                </ul>
              </li>
              <li class="" ><router-link to="#">人脸识别</router-link></li>
              <li><router-link to="#">人脸识别</router-link></li>
              <li><router-link to="#">人脸识别</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
    export default {
        name: "siteIndexNav"
    }
</script>

<style scoped>
  #nav{
    font-size: 18px;
    height: 71px;
    background:
      url("../assets/img/logo.png")10px 10px no-repeat,
      url("../assets/img/logo_bg_bar.png") no-repeat,
      url("../assets/img/top_bar.png") #465484 round;
  }

</style>
