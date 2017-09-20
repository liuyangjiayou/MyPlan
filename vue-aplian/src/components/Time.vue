
<template>
    <div>
      <router-link to="/time/time-add" class="btn btn-primary">创建</router-link>
      <hr>
      <router-view></router-view>
      <hr>
      <ul class="list-group" v-for="list in lists">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-2">
              <img :src="list.avatar" class="img-circle img-responsive">
            </div>
            <div class="col-md-1">
              <div class="row">
                <i class="glyphicon glyphicon-time">{{list.time}}小时</i>
                <i class="glyphicon glyphicon-calendar">{{list.date}}</i>
              </div>
            </div>
            <div class="col-md-8">
              <div>{{list.comment}}</div>
            </div>
            <div class="col-md-1">
              <button class="btn btn-danger">
                删除
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lists : [
                  {
                    avatar : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=958555937,293602035&fm=27&gp=0.jpg',
                    name : 'LY',
                    date : '2017年',
                    time : '2',
                    comment : '今天回家早点吃饭'
                  }
                ]
            }
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
div{
  line-height: 30px;
}
</style>
