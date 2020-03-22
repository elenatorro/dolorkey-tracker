<template>
<div class="C__PageContainer">
    <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageContainer extends Vue {}
</script>

<style scoped lang="scss">
.C__PageContainer {
    width: 100%;
    min-height: 100%;
    background-color: #efefef;
    display: flex;
}

@media print {
  .C__PageContainer {
    background-color: transparent;
  }
}
</style>
