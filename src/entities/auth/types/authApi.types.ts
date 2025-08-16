export type LoginRequest = {
    email: string
    password: string
}

export type LoginResponse = {
    accessToken: string
}


export type MeResponse = {
    userId: string
    userName: string
    email: string
    isBlocked: boolean
}