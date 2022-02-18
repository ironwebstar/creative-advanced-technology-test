import { MutationTree } from 'vuex'
import { State } from './state'
import { User } from '../domain/users/Users.Model'
import { Employee } from '../domain/employees/Employees.Model'

export enum Mutation {
  SET_AUTH_USER = 'SET_AUTH_USER',
  SET_EMPLOYEES = 'SET_EMPLOYEES',
}

export type Mutations<S = State> = {
  [Mutation.SET_AUTH_USER](state: S, payload: User): void
  [Mutation.SET_EMPLOYEES](state: S, payload: Employee[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.SET_AUTH_USER] (state: State, payload: User) {
    state.authUser = payload
  },

  [Mutation.SET_EMPLOYEES] (state: State, payload: Employee[]) {
    state.employees = payload
  }
}
