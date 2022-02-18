export interface User {
  userId: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserRequest {
  email: string
  password: string
}
