import { Employee } from '../domain/employees/Employees.Model'
import { User } from '../domain/users/Users.Model'

export interface State {
  debug: boolean
  version: string
  authUser: User | null
  employees: Employee[]
}

const versionString =
  process.env.MODE === 'development'
    ? process.env.APP_VERSION + '-dev'
    : process.env.APP_VERSION

export const state: State = {
  debug: process.env.MODE === 'development',
  version: versionString,
  authUser: null,
  employees: []
}
