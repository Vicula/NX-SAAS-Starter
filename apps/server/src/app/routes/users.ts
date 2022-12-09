/**
 ==============================================================================
 * @file   routes/users
 * @brief  tRCP routes for user CRUD
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 * 
 * {@link https://github.com/TomDoesTech/trpc-tutorial/blob/main Resource}
 *
 ==============================================================================
 */

import type { TRPCServer } from "../index";
import { createUserSchema, loginUserSchema } from "@nx-saas/data-library";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import type { User } from "@prisma/client";
import * as trpc from '@trpc/server'

const useUserRoutes = (t: TRPCServer) => {
    return {
        Users: t.router({
            RegisterUser: t.procedure
                .input(createUserSchema)
                .mutation(async ({ ctx, input }): Promise<User | undefined> => {
                    const { email, password } = input

                    try {
                        const user = await ctx.prisma.user.create({
                            data: {
                                email,
                                password,
                            },
                        })

                        return user
                    } catch (e) {
                        if (e instanceof PrismaClientKnownRequestError) {
                            if (e.code === 'P2002') {
                                throw new trpc.TRPCError({
                                    code: 'CONFLICT',
                                    message: 'User already exists',
                                })
                            }

                            throw new trpc.TRPCError({
                                code: 'INTERNAL_SERVER_ERROR',
                                message: 'Something went wrong',
                            })
                        }
                    }
                }),
            FetchUser: t.procedure
                .input(loginUserSchema)
                .mutation(async ({ ctx, input }): Promise<User | undefined> => {
                    const { email } = input;

                    const user = await ctx.prisma.user.findUnique({
                        where: {
                            email,
                        },
                    })

                    if (!user) {
                        throw new trpc.TRPCError({
                            code: 'NOT_FOUND',
                            message: 'User not found',
                        })
                    }

                    return user
                })
        })
    }
}

export default useUserRoutes