import BootstrapServer, { type Context, type AppRouter } from './app';

/**
 * Creating New Instance of the server
 */
BootstrapServer();

/**
 * expose the Context and Router of the 
 * Express tRPC API
 */
export { Context, AppRouter };