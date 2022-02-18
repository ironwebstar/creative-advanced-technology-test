import { User, UserRequest } from './Users.Model'
import { users } from './Users.Stub'

export const userLogin = (authUser: UserRequest): User => {
  const { email, password } = authUser
  const authUserIndex = users.findIndex((user) => user.email === email && user.password === password)

  return users[authUserIndex]
}
