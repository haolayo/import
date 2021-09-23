<template>
  <div class="vant-table">
    <table cellspacing="0" :style="bgcolor" style="width: 100%" class="table">
      <tr>
        <th
          class="th"
          v-for="(item, index) in option.column"
          :key="index"
          :class="{ thDis: item.isDisable }"
        >
          {{ item.label }}
        </th>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index" class="list-tr">
        <td v-for="(context, i) in option.column" :key="i">
          {{ item[context.prop] }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    bgcolor: Object,
    tableData: Array,
    option: Object,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style  scoped>
.vant-table {
  margin-top: 0.5rem;
  overflow: auto;
  font-size: 8px;
  width: 100%;
}
.table {
  border-radius: 0.185185rem;
  width: auto;
}
.th {
  height: 2rem;
  line-height: 2rem;
  background-color: #1989fa;
  text-align: center;
  min-width: 4rem !important;
  color: #ffffff;
}
.list-tr {
  height: 2rem;
  line-height: 2rem;
}
.list-tr:nth-child(2n) {
  background-color: #eff4fa;
}
th {
  white-space: nowrap;
}
.thDis {
  display: none;
}
</style>
