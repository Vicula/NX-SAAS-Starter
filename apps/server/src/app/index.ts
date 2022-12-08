/**
 ==============================================================================
 * @file   server/app/index.ts
 * @brief   server's main app file used for creating the express app 
 *          and tRPC routes
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

import path from "path";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import redisClient from "./utils/redis";
import { environment } from '../environments/environment';
import connectDB from "./utils/prisma";

dotenv.config({ path: path.join(__dirname, "./.env") });

/**
 * Creates a context function that is called for 
 * every incoming request and the results will be
 * passed as contextual data to all the resolvers
 */
const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });

export type Context = inferAsyncReturnType<typeof createContext>;


/**
 * initalizes tRPC server
 */
const t = initTRPC.context<Context>().create();
export type TRPCServer = typeof t;

/**
 * tRPC router used to manage all 
 * tRPC endpoints, this allows us to:
 *  - Query endpoints: for requesting data
 *  - Mutation endpoints: to perform the Create, Update, and Delete operations.
 *  - Subscription endpoints: used to subscribe to data over WebSockets.
 */
const appRouter = t.router({
    sayHello: t.procedure.query(async () => {
        const message = await redisClient.get("tRPC");
        return { message };
    }),
});

/**
 * exports the AppRouter type so we can know the different 
 * queries, mutations, and subscriptions available on the tRPC server
 * inside the react app
 */
export type AppRouter = typeof appRouter;

/**
 * Here we export a function to settup the express
 * app and hook it up to the trpc API
 */
const BootstrapServer = () => {
    /**
     * configure the Express tRPC server
     */
    const app = express();
    if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

    app.use(
        cors({
            origin: [environment.origin, "http://localhost:3000"],
            credentials: true,
        })
    );
    /**
     * setup the trpc API on the express app 
     */
    app.use(
        "/api/trpc",
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext,
        })
    );

    const port = environment.port;

    app.listen(port, () => {
        console.log(`🚀 Server listening on port ${port}`);

        // CONNECT DB
        connectDB();
    });
}

/** 
 * Then we export the function
 * for controlled creation
 */
export default BootstrapServer;