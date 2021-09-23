<template>
  <div>
<van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-button type="info">提交</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "数据", value: 0 },
        { text: "0", value: 1 },
        { text: "0", value: 2 },
      ],
      option2: [
        { text: "域名", value: "a" },
        { text: "0", value: "b" },
        { text: "0", value: "c" },
      ],
    };
  },
};
</script>

<style  scoped>
.van-button--normal {
  padding: 0 15px;
  font-size: 14px;
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
}
</style>