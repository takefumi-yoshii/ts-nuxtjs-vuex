<template>
  <div class="wrapper">
    <AppCounter />
    <AppTodos />
  </div>
</template>

<script>
import AppCounter from '../components/AppCounter.vue'
import AppTodos from '../components/AppTodos.vue'

export default {
  components: {
    AppCounter,
    AppTodos
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
.wrapper > * {
  width: 48%;
  flex: 0 0 auto;
}
</style>
