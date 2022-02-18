import { User, UserRequest } from './Users.Model'
import { users } from './Users.Stub'

export const userLogin = (authUser: UserRequest): User | null => {
  const { email, password } = authUser
  const authUserIndex = users.findIndex((user) => user.email === email && user.password === password)

  return authUserIndex > -1 ? users[authUserIndex] : null
}
