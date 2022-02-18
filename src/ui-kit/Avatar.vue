<template>
  <div
    class="rounded-lg w-12 h-12 flex items-center justify-center"
    :class="props.type === ProjectType.STORY ? 'bg-orange' : 'bg-green'"
  >
    <img v-if="props.referenceType === ReferrenceType.TOBACCO" src="../assets/images/tobacco.svg" />
    <img v-if="props.referenceType === ReferrenceType.CUSTOMER" src="../assets/images/customer-1.svg" />
  </div>
</template>

<script lang="ts">
import { ProjectType, ReferrenceType } from '@/domain/employees/Employees.Model'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<ProjectType>,
      default: ProjectType.STORY
    },
    referenceType: {
      type: String as PropType<ReferrenceType>,
      default: ReferrenceType.TOBACCO
    }
  },

  setup (props) {
    return {
      props,
      ProjectType,
      ReferrenceType
    }
  }
})
</script>
