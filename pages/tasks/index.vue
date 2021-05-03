<template>
  <ul class="list-group list-group-flush">
    <NuxtLink v-for="task in tasks" :key="task.slug" :to="task.path">
      <li class="list-group-item">
        {{ task.title }}
      </li>
    </NuxtLink>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const tasks = await $content({ deep: true })
      .where({ dir: `/tasks` })
      .fetch()

    return {
      tasks,
    }
  },
}
</script>
