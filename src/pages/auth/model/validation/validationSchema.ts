import { z } from 'zod'

const nameSchema = z
  .string()
  .min(2, { message: 'Minimum number of characters 2' })
  .max(30, { message: 'Maximum number of characters 30' })

const emailSchema = z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
  message: 'The email must match the format example@example.com',
})

const passwordSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{6,}$/, {
    message:
      'Password must contain a-z, A-Z,  ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
  })

const passwordConfirmSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{6,}$/, {
    message:
      'Password must contain a-z, A-Z,  ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
  })

export const signUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  passwordConfirmation: passwordConfirmSchema,
  isAgree: z.boolean(),
})

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type signInType = z.infer<typeof signInSchema>
export type signUpType = z.infer<typeof signUpSchema>
