<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
      <div class="jumbotron">
        <h1>亲！创建你的计划吧~</h1>
        <router-link class="btn btn-primary" to="/time">定制计划</router-link>
      </div>
    </div>
</template>
<script>
  import Add from '../containers/Add.vue'
    export default {
        data(){
            return {}
        },
        components: {Add},
        methods: {}
    }
</script>
<style scoped>

</style>
