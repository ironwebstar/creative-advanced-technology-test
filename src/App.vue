<template>
  <div>
    <app-container v-if="route.path !== '/login'">
      <router-view />
    </app-container>
    <auth-container v-else>
      <router-view />
    </auth-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import AppContainer from './app/app-container/AppContainer.vue'
import AuthContainer from './app/app-container/AuthContainer.vue'

export default defineComponent({
  components: {
    AppContainer,
    AuthContainer
  },

  setup () {
    const route = useRoute()
    return {
      route
    }
  }
})
</script>
