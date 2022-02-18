<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div
      v-for="status in statusTypes"
      :key="status"
    >
      <Card :title="status">
        <div
          v-for="employee in filterEmployees(status)"
          :key="employee.id"
          class="p-3 text-xs border-b border-grey-200 last:border-b-0"
        >
          <div class="flex gap-3 items-center">
            <Avatar :type="employee.type" :referenceType="employee.referenceType" />
            <div class="flex flex-col gap-1">
              <div class="flex flex-wrap gap-1 items-center">
                <div class="text-grey-100 font-bold">{{ employee.username }}</div>
                <div class="text-sm font-medium">{{ employee.title }}</div>
              </div>
              <div class="flex flex-wrap gap-1 items-center">
                <div class="text-primary font-bold">{{ `#${employee.ticketNumber}` }}</div>
                <div>{{ employee.type.toLowerCase() }}</div>
              </div>
            </div>
          </div>

          <div v-if="status === StatusType.WATCHING">
            <div class="text-grey-100 pt-2">{{ employee.description }}</div>
            <div class="pt-8 flex flex-col gap-2">
              <button
                type="button"
                class="w-full text-white bg-primary font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Manage projects
              </button>
              <button
                type="button"
                class="w-full text-primary bg-grey-200 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit projects
              </button>
            </div>
          </div>

          <div v-if="status === StatusType.COMPLETED">
            <div class="text-grey-100 pt-2">{{ employee.description }}</div>
            <div class="text-grey-100 flex flex-row items-start gap-4 mt-4">
              <div class="flex items-center gap-2">
                <img v-lazy="HeartImg" />
                <span>1</span>
              </div>
              <div class="flex items-center gap-1">
                <img v-lazy="EyeImg" />
                <span>1</span>
              </div>
              <div class="flex items-center gap-1">
                <img v-lazy="UsersImg" />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Employee, StatusType } from '@/domain/employees/Employees.Model'
import { computed, defineComponent } from 'vue'
import { useStore } from '../../../store'

import Card from '../../../ui-kit/Card.vue'
import Avatar from '../../../ui-kit/Avatar.vue'

import EyeImg from '../../../assets/images/eye.svg'
import HeartImg from '../../../assets/images/heart.svg'
import UsersImg from '../../../assets/images/users.svg'

export default defineComponent({
  components: {
    Card,
    Avatar
  },

  setup () {
    const store = useStore()

    const employees = computed<Employee[]>(() => store.state.employees)

    return {
      EyeImg,
      HeartImg,
      UsersImg,
      StatusType,
      statusTypes: Object.values(StatusType),
      employees,
      filterEmployees: (status: StatusType) => employees.value.filter((employee) => employee.status === status)
    }
  }
})
</script>
