import { ActionTree, ActionContext } from 'vuex'

import { State } from './state'
import { Mutations, Mutation } from './mutations'

import { UserRequest } from '../domain/users/Users.Model'
import { userLogin } from '../domain/users/Users.Repository'
import { getEmployees } from '../domain/employees/Employees.Repository'
import { AUTH_USER } from '.'

export enum Action {
  userLogin = 'userLogin',
  getEmployees = 'getEmployees',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [Action.userLogin]({ state, getters, commit, dispatch }: AugmentedActionContext, user: UserRequest): boolean
  [Action.getEmployees]({ state, getters, commit, dispatch }: AugmentedActionContext): void
}

export const actions: ActionTree<State, State> & Actions = {
  [Action.userLogin] (context: AugmentedActionContext, authUser: UserRequest) {
    const response = userLogin(authUser)
    if (response) {
      localStorage.setItem(AUTH_USER, response.userId)
      context.commit(Mutation.SET_AUTH_USER, response)
      context.dispatch(Action.getEmployees)
    }
    return !!response
  },

  [Action.getEmployees] (context: AugmentedActionContext) {
    const response = getEmployees()
    context.commit(Mutation.SET_EMPLOYEES, response)
  }
}
