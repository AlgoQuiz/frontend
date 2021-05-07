<template>
  <article class="task">
    <h1 class="task__title">{{ page.title }}</h1>
    <nuxt-content class="task__content" :document="page" />

    <div class="task__editor">
      <h2>Your solution:</h2>
      <ClientOnly>
        <CodeEditor class="task__ide" :default-code="page.code" />
      </ClientOnly>
    </div>
  </article>
</template>

<script>
import CodeEditor from '~/components/CodeEditor'

export default {
  components: {
    CodeEditor,
  },

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
.task {
  width: 100%;
}

.task__title {
  margin-bottom: 64px;
}

.task__editor {
  margin-top: 48px;
}

.task__ide {
  min-height: 200px;
}
</style>
