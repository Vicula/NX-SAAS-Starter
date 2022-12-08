/**
 ==============================================================================
 * @file   utils/redis.ts
 * @brief   utility file used for setting up a redis server connection
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

import { createClient } from 'redis';

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
    url: redisUrl,
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('🚀 Redis client connected...');
        redisClient.set(
            'tRPC',
            '🙌🙌Welcome to tRPC with React.js, Express and Typescript!'
        );
    } catch (err: any) {
        console.log(err.message);
        process.exit(1);
    }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;
