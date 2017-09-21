<template>
    <div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>计划的总时间</h2>
        </div>
        <div class="panel-body">
          {{time | number}}小时
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        filters : { //这是过滤器 根据第一个参数来转化形式
          number(t){
             return t.toFixed(2) + 'h';
          }
        },
        data(){
            return {}
        },
        computed :{
          ...mapState({time : 'totalTime'}) //名字相是数组，名字不同是对象
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
