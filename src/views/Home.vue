<template>
  <div class="V__Home">
    <PageContainer>
      <Page />
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Page from '@/components/Page.vue'

export default {
  name: 'Home',
  components: {
    PageContainer,
    Page
  }
}
</script>
<style scoped lang="scss">
.V__Home {
  width: 100%;
  height: 100%;
}
</style>
