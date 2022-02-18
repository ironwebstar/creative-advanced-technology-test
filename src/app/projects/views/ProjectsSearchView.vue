<template>
  <div class="flex flex-row justify-end w-full">
    <div class="flex items-center w-64 bg-white border-grey-200 border rounded-lg">
      <div class="w-full">
        <input type="search" class="w-full px-4 rounded-full focus:outline-none text-sm" placeholder="subject or reference">
      </div>

      <div>
        <button type="submit" class="flex items-center bg-white text-grey-100 justify-center w-12 h-8 rounded-r-lg">
          <img src='../../../assets/images/search.svg' />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
