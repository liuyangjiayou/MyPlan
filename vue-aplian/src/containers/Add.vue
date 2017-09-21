<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="date" class="control-label">日期</label>
            <input v-model="date" type="date" class="form-control" id="date">
          </div>
          <div class="form-group col-md-6">
            <label for="time" class="control-label">时间</label>
            <input v-model.number="time" type="number" class="form-control" id="time">
          </div>
        </div>
        <div class="form-group">
          <textarea v-model="comment" class="form-control" placeholder="请输入提示内容"></textarea>
        </div>
        <div class="form-group">
          <button @click="add" class="btn btn-success">添加计划</button>
          <button @click="cancel" class="btn btn-default">取消</button>
        </div>
      </form>
    </div>
</template>
<script>
  import * as types from '../store/types'
  import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                date : '',
                time : '',
              comment : ''
            }
        },
        components: {},
        methods: {
            ...mapActions([types.ADD_PLAN,types.ADD_TIME]),
          //发布添加的动作
            add(){
               this[types.ADD_PLAN]({
                   date : this.date,
                 time : this.time,
                 comment : this.comment
               });
               //发布添加总时间的动作
               this[types.ADD_TIME](this.time)
            },
          //取消
            cancel(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>

</style>
