export interface UserState {
  data: EmailUser | null
}

export interface EmailUser {
  uid?: string | null
  emailVerified?: boolean | null
  email?: string | null
}

export interface UserAuth {
  authUser: EmailUser
  claims: {
    aud: string
    authTime: number
    email: string
    emailVerified: false
    exp: number
    firebase: {
      identities: {
        email?: string[]
      }
      signInProvider: string
    }
    iat: number
    iss: string
    sub: string
    userId: string
  }
}
