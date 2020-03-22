<template>
<table class="C__TrackTable">
  <thead>
    <tr>
      <th></th>
      <th v-for="(day, index) in week" :key="index">
        {{day}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(day, index) in dayTimes" :key="index">
      <td>
        <p>{{day.icon}}</p>
        <p>{{day.time}}</p>
      </td>
      <td v-for="(day, index) in week" :key="index">
        <DayTable />
      </td>
    </tr>
  </tbody>
</table>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DayTable from '@/components/DayTable.vue'
import * as weekService from '@/services/week.service'

@Component({
  components: {
    DayTable
  }
})
export default class TrackTable extends Vue {
  get week () {
    return weekService.week()
  }

  get dayTimes () {
    return weekService.dayTimes()
  }
}
</script>

<style scoped lang="scss">
.C__TrackTable {
    border-collapse: collapse;
    width: 100%;
    border-bottom: 3px solid var(--dk--main-color);
}

td {
    padding: 0;
    border: 1px solid var(--dk--main-color);
}

th {
    border-bottom: 2px solid var(--dk--main-color);
}

td:first-of-type {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 .5cm;
    border: 3px solid var(--dk--main-color);
    display: table-cell;

    p {
       margin: 0;
    }

    p:first-of-type {
        font-size: 36px;
    }

    p:last-of-type {
        font-size: 12px;
    }
}

td:last-of-type {
    border-right: 3px solid var(--dk--main-color);
}
</style>
