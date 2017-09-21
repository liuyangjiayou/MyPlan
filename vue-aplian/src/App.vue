<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <sliderbar></sliderbar>
          </div>
          <div class="col-md-9">
            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in">
              <router-view class="position"></router-view>
            </transition>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './containers/Navbar.vue'
  import Sliderbar from './containers/Sliderbar.vue'
export default {
      data(){
          return {}
      },
      mounted(){

      },
      components : {
          Navbar,
          Sliderbar
      }
}
</script>

<style>
  .position{
    position: absolute;
    width: 100%;
  }
</style>
