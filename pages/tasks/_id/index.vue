<template>
  <article class="task">
    <h1 class="task__title">{{ page.title }}</h1>
    <nuxt-content class="task__content" :document="page" />

    <div class="task__editor">
      <h2>Your solution:</h2>
      <ClientOnly>
        <CodeEditor v-model="solution" class="task__ide" :value="page.code" />
      </ClientOnly>
      <button type="button" class="btn btn-primary" @click="submitCode">
        Primary
      </button>
    </div>
  </article>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import CodeEditor from '~/components/CodeEditor'

const { mapActions: mapSolutionsActions } = createNamespacedHelpers('solutions')

export default {
  components: {
    CodeEditor,
  },

  async asyncData({ $content, params }) {
    const { id } = params

    const page = await $content(`tasks/${id}`).fetch()

    return {
      page,
      solution: page.code,
      language: 'js',
    }
  },

  computed: {
    algorithmId() {
      return this?.$route?.params?.id
    },
  },

  methods: {
    ...mapSolutionsActions(['submitSolution']),

    async submitCode() {
      const { solution, language } = this

      await this.submitSolution({
        name: this.algorithmId,
        solution,
        language,
      })
    },
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
