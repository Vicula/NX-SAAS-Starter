/**
 ==============================================================================
 * @file   utils/prisma.ts
 * @brief   utility file used for setting up a prisma client connection
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 * 
 * {@link https://codevoweb.com/setup-trpc-api-with-prisma-postgresql-nodejs-reactjs/ Resource}
 *
 ==============================================================================
 */

import { PrismaClient } from '@prisma/client';

export const prisma =
    global.prisma || new PrismaClient({ log: ['query', 'info'] });

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

async function connectDB() {
    try {
        await prisma.$connect();
        console.log('🚀 Database connected successfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

export default connectDB;