<template>
  <header
    class='bg-white sticky top-0 flex items-center flex-shrink-0 w-full h-full max-h-20 border-b border-grey-200'
  >
    <div class='flex items-center justify-between flex-1'>
      <nav class='relative flex items-center justify-end flex-1 lg:justify-start px-6'>
        <div class='flex items-center'>
          <a class='rounded-full' href="#">
            <img v-lazy="LogoImg" />
          </a>
        </div>
        <div class='flex items-center pl-4'>
          <a class='pl-2 rounded-full flex items-center gap-2' href="#">
            <img v-lazy="FolderImg" />
            <div class="text-base font-bold">Projects</div>
          </a>
        </div>

        <ul class='flex items-center justify-center ml-auto space-x-2'>
          <li class='flex items-center justify-center cursor-pointer'>
            <img v-lazy="BellImg" />
          </li>
          <li class='flex items-center justify-center cursor-pointer px-4 text-grey-100 text-xl'>
            |
          </li>
          <li class='flex items-center justify-center cursor-pointer'>
            <div class="p-3 bg-grey-300 rounded-md">
              <img v-lazy="CustomerImg" />
            </div>
          </li>
          <li class='flex items-center justify-center cursor-pointer'>
              <img v-lazy="ChevronDownImg" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from '../../../store'

import { User } from '../../../domain/users/Users.Model'

import LogoImg from '../../../assets/images/logo.svg'
import FolderImg from '../../../assets/images/folder.svg'
import BellImg from '../../../assets/images/bell.svg'
import CustomerImg from '../../../assets/images/customer.svg'
import ChevronDownImg from '../../../assets/images/chevron-down.svg'

export default defineComponent({
  setup () {
    const store = useStore()
    const currentUser = computed<User | null>(() => store.getters.currentUser)

    return {
      LogoImg,
      FolderImg,
      BellImg,
      CustomerImg,
      ChevronDownImg,
      currentUser
    }
  }
})
</script>
