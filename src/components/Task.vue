<template>
  <div id="task">
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" /> -->
    <div class="dropdown">
      <van-dropdown-menu active-color="#1989fa" id="menu__bar">
        <van-dropdown-item v-model="value1" :options="option1" />

        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>

      <van-cell-group>
        <van-field
          v-model="date"
          label=""
          placeholder="选择日期"
          readonly
          @click="DataShow"
          disabled
        />
      </van-cell-group>
    </div>

    <van-cell-group>
      <van-field v-model="search" label="" placeholder="请输入搜索关键词" />
      <van-button type="info">搜索</van-button>
    </van-cell-group>

    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar
      v-model="show"
      type="range"
      @confirm="onConfirm"
      :min-date="minDate"
      :max-date="maxDate"
      color="#1989fa"
    />
    <Table :tableData="tableData" :option="option"> </Table>
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  components: { Table },

  data() {
    return {
      show: false,
      search: "",
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      value: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "选择状态", value: 0 },
        { text: "等待测试", value: 0 },
        { text: "未执行", value: 1 },
        { text: "测试完成", value: 2 },
        { text: "等待导入", value: 3 },
        { text: "导入完成", value: 4 },
        { text: "进入测试队列", value: 5 },
        { text: "进入导入队列", value: 6 },
        { text: "出错", value: 7 },
        { text: "测试中", value: 8 },
        { text: "导入中", value: 9 },
        { text: "已删除", value: 10 },
      ],
      option2: [
        { text: "是否更新OA", value: "a" },
        { text: "已更新OA", value: "b" },
        { text: "未更新OA", value: "c" },
      ],
      date: "",
      minDate: new Date(2021, 5, 1),
      maxDate: new Date(2025, 1, 31),

      //th
      option: {
        column: [
          {
            label: "ID",
            prop: "roomType",
          },
          {
            label: "域名",
            prop: "closedAccount",
          },
          {
            label: "VPS",
            prop: "noAccount",
          },
          {
            label: "IP",
            prop: "givePrice",
          },
          {
            label: "数据",
            prop: "totalPrice",
          },
          {
            label: "图片目录",
            prop: "totalPrice",
          },
          {
            label: "产品数量",
            prop: "totalPrice",
          },
          {
            label: "状态",
            prop: "totalPrice",
          },
          {
            label: "更新OA",
            prop: "totalPrice",
          },
          {
            label: "次数",
            prop: "totalPrice",
          },
          {
            label: "自动完成",
            prop: "totalPrice",
          },
          {
            label: "管理",
            prop: "totalPrice",
          },
        ],
      },

      tableData: [
        {
          closedAccount: 0,
          givePrice: 0,
          noAccount: 0,
          roomType: "BOSS卡座",
          totalPrice: 0,
        },
        {
          closedAccount: 0,
          givePrice: 0,
          noAccount: 0,
          roomType: "BOSS卡座",
          totalPrice: 0,
        },
        {
          closedAccount: 0,
          givePrice: 0,
          noAccount: 0,
          roomType: "BOSS卡座",
          totalPrice: 0,
        },
        {
          closedAccount: 0,
          givePrice: 0,
          noAccount: 0,
          roomType: "BOSS卡座",
          totalPrice: 0,
        },
        {
          closedAccount: 0,
          givePrice: 0,
          noAccount: 0,
          roomType: "BOSS卡座",
          totalPrice: 0,
        },
      ],
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    DataShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
#app
  > div
  > div
  > div.van-tabs__content
  > div:nth-child(1)
  > div
  > van-cell-group {
  display: flex;
}
.van-button--normal {
  padding: 0px 8px;
  font-size: 12px;
  white-space: nowrap;
}

.van-field__control:disabled {
  color: #c8c9cc;
  cursor: not-allowed;
  opacity: 1;
  -webkit-text-fill-color: #000000;
}

input.van-field__control {
  text-align: center;
}

div#menu__bar {
}
.dropdown{

  display: flex;
}
</style>