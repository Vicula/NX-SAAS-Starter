import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@nx-saas/server";

export const trpc = createTRPCReact<AppRouter>();