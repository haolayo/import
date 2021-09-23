<template>
  <div class="home">
<h4>导数据系统   
</h4>


<van-tabs v-model="active" >
  <van-tab title="任务管理"><Task> </Task></van-tab>
  <van-tab title="创建任务"><Creat></Creat></van-tab>
</van-tabs>

  </div>
</template>

<script>
import Creat from '../components/Creat.vue';
import Task from '../components/Task.vue'

export default {
  name: 'Home',
  components: {Task, Creat},
  data() {
    return {
      activeKey: 0,
            activeName: 'a',

    };
  },
}
</script>
<style scoped>
.van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: 40px;
    height: 3px;
    background-color: #1989fa;
    border-radius: 3px;
}
</style>
