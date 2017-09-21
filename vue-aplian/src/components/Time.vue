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
              <div class="text-center">
                {{list.name}}
              </div>
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
              <button @click="remove(list)" class="btn btn-danger">
                删除
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div v-show="!isShow" class="text-warning h3">
        亲！ 添加计划吧，您的计划已经空空乳液
      </div>
    </div>
</template>
<script>
  import * as types from '../store/types'
  import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        data(){
            return {}
        },
        components: {},
        computed : {
          ...mapState(['lists']),
          ...mapGetters(['isShow'])
        },
        methods: {
          ...mapActions([
              types.DECRMENT_TOTALTIME,
              types.REMOVE_PLAN
          ]),
            remove(list){//表示当前传进来的那一项
                this[types.REMOVE_PLAN](list);
                this[types.DECRMENT_TOTALTIME](list.time)
            }
        }
    }
</script>
<style scoped>
div{
  line-height: 30px;
}
</style>
