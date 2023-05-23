export interface UserLogin {
  email: string
  password: string
}

export interface UserRegister {
  email: string
  password: string
  name: string
  lastname: string
}

export interface UserLoginResponse {
  token: string
  userEmail: string
}
