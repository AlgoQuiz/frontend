<template>
  <article class="task">
    <h1 class="task__title">{{ page.title }}</h1>
    <nuxt-content class="task__content" :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { id } = params

    const page = await $content(`tasks/${id}`).fetch()

    return {
      page,
    }
  },
}
</script>

<style scoped>
.task__title {
  margin-bottom: 64px;
}
</style>
