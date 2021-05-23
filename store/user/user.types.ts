export interface UserState {
  data: EmailUser | null
}

export interface EmailUser {
  uid?: string | null
  emailVerified?: boolean | null
  email?: string | null
}
