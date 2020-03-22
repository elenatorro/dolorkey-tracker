<template>
<div class="C__PageTitle">
    <h1>{{ title }}</h1>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageTitle extends Vue {
  @Prop({ default: 'Page Title' }) public title!: string;
}
</script>
