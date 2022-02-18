<template>
  <div class="text-base px-32">
    <div class="text-xl font-bold mt-5">Projects Dashboard</div>
    <projects-search-view />

    <div class="mt-5">
      <tabs :tabsNames="tabs" @changed="(tab) => changeTab(tab)" />
    </div>

    <div class="py-4">
      <div v-if="currentTab === Tab.Employees">
        <projects-employee-view />
      </div>
      <div v-if="currentTab === Tab.Departments">
        <projects-department-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import ProjectsSearchView from './views/ProjectsSearchView.vue'
import ProjectsEmployeeView from './views/ProjectsEmployeeView.vue'
import ProjectsDepartmentView from './views/ProjectsDepartmentView.vue'
import Tabs from '../../ui-kit/Tabs.vue'

enum Tab {
  Employees = 'Employees',
  Departments = 'Departments',
}

export default defineComponent({
  components: {
    ProjectsSearchView,
    ProjectsEmployeeView,
    ProjectsDepartmentView,
    Tabs
  },

  setup () {
    const currentTab = ref<Tab>(Tab.Employees)

    return {
      Tab,
      tabs: [Tab.Employees, Tab.Departments],
      currentTab,

      changeTab: (tab: Tab) => {
        currentTab.value = tab
      }
    }
  }
})
</script>
