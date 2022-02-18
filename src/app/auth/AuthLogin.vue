<template>
  <div class="mx-auto flex justify-center flex-col items-center text-black w-1/3 mt-20">
    <img v-lazy="EarthLinkLogoImg" />
    <h3 class="text-3xl text-gray-900 text-center font-bold my-5">
      Sign in to Task Manager
    </h3>

    <div class="bg-white shadow-md border border-grey-200 w-full rounded-lg p-4 sm:p-6 lg:p-8">
      <div class="space-y-6">
        <div>
          <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
          <input
            id="email"
            v-model="authUser.email"
            type="email"
            name="email"
            class="bg-grey-300 border border-grey-200 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="you@example.com"
            required=""
          />
        </div>
        <div>
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Password</label>
          <input
            id="password"
            v-model="authUser.password"
            type="password"
            name="password"
            placeholder="Password"
            class="bg-grey-300 border border-grey-200 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
          />
        </div>

        <div class="flex items-start">
          <div class="flex flex-row w-full justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="border border-grey-200 focus:ring-3 h-4 w-4 rounded"
                  required=""
                />
              </div>
              <div class="text-sm ml-3">
                <label for="remember" class="font-medium text-xs">
                  Keep me logged in
                </label>
              </div>
            </div>

            </div>
            <a href="#" class="text-sm hover:underline text-primary font-bold whitespace-nowrap">
              Forgot  Password?
            </a>
          </div>
          <button
            type="button"
            class="w-full text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="login"
          >
            Sign in
          </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserRequest } from '../../domain/users/Users.Model'
import { defineComponent, reactive } from 'vue'
import { Action, useStore } from '../../store'
import router from '../../router'

import EarthLinkLogoImg from '../../assets/images/earthlinkLogo.svg'

export default defineComponent({
  setup () {
    const store = useStore()
    const authUser = reactive<UserRequest>({
      email: '',
      password: ''
    })

    return {
      EarthLinkLogoImg,
      authUser,
      login: async () => {
        const response = await store.dispatch(Action.userLogin, authUser)
        if (response) router.push('/')
      }
    }
  }
})
</script>
