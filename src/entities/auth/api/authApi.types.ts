export type BaseResponseError = {
  statusCode: number
  messages: ErrorMessageType[]
  error: string
}

export type ErrorMessageType = {
  message: string
  field: string
}
