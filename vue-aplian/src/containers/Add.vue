<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="date" class="control-label">日期</label>
            <input type="date" class="form-control" id="date">
          </div>
          <div class="form-group col-md-6">
            <label for="time" class="control-label">时间</label>
            <input type="number" class="form-control" id="time">
          </div>
        </div>
        <div class="form-group">
          <textarea class="form-control" placeholder="请输入提示内容"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-success">添加计划</button>
          <button class="btn btn-default">取消</button>
        </div>
      </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
