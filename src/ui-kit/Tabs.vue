<template>
  <div class="tabs">
    <div class="flex border-b border-grey-200">
      <div
        class="tab flex items-center justify-center border-primary text-grey-100 pr-8 pb-2 cursor-pointer"
        :class="active === tab ? 'border-b-2 text-primary font-bold' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        {{tab}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tabs',

  props: {
    tabsNames: {
      type: Array as PropType<string[]>,
      required: true
    }
  },

  emits: ['changed'],

  data () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : ''
    }
  },

  methods: {
    changeTab (tab: string) {
      this.active = tab
      this.$emit('changed', tab)
    }
  }
})
</script>
