<template>
  <body class='antialiased text-gray-900'>
    <div class='relative flex h-screen'>
      <div class='relative flex flex-col flex-1 h-full max-h-full overflow-y-scroll'>
        <AppNavigationBar />

        <div class='flex flex-col flex-1 max-h-full pl-2 pr-2 rounded-md xl:pr-4'>
          <main class='flex-1 pt-2'>
            <slot />
          </main>

          <AppFooterView />
        </div>
      </div>
    </div>
  </body>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import AppNavigationBar from './views/AppNavigationBar.vue'
import AppFooterView from './views/AppFooterView.vue'

export default defineComponent({
  components: {
    AppNavigationBar,
    AppFooterView
  },

  setup () {
    return {
    }
  }
})
</script>
