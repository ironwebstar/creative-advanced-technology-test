import { GetterTree } from 'vuex'
import { State } from './state'
import { User } from '../domain/users/Users.Model'

export type Getters = {
  currentUser(state: State): User | null
}

export const getters: GetterTree<State, State> & Getters = {
  currentUser (state) {
    return state.authUser ? state.authUser : null
  }
}
