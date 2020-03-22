<template>
  <table class="C__DayTable">
    <tbody>
      <tr v-for="n in cells" :key="n">
        <td v-for="m in cells" :key="m"></td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DayTable extends Vue {
    protected cells = 3
}
</script>

<style scoped lang="scss">
.C__DayTable {
    table-layout: fixed;
    height: 2.25cm;
    width: 100%;
    border-collapse: collapse;
    margin: 0;
}

td {
    border: 1px solid var(--dk--main-color);
}

tr {
    height: .5cm;
}
</style>
