<template>
  <div class="border shadow-md border-grey-200 rounded-lg">
    <div class="bg-grey-300 p-3 border-grey-200 border-b text-xs">
      {{ props.title.replace('_', ' ') }}
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup (props) {
    return {
      props
    }
  }
})
</script>
