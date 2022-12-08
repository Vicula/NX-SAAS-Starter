import * as yup from "yup"

export interface IUser {
    id: string;
    name: string;
    email: string;
    photo: string;
    verified: boolean;

    password: string;
    role: UserRoleTypes;

    createdAt: Date;
    updatedAt: Date;

    provider: string;
}

export enum UserRoleTypes {
    user,
    admin
}

export const createUserSchema = yup.object({
    password: yup.string().required(),
    email: yup.string().email().required(),
})

export const createUserOutputSchema = yup.object({
    password: yup.string(),
    email: yup.string().email(),
})

export type CreateUserInput = yup.TypeOf<typeof createUserSchema>

export const loginUserSchema = yup.object({
    password: yup.string().required(),
    email: yup.string().email().required(),
})

export const loginUserOutputSchema = yup.object({
    password: yup.string(),
    email: yup.string().email(),
})

export type LoginUserInput = yup.TypeOf<typeof createUserSchema>