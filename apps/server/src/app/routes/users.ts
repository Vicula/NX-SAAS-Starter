import type { TRPCServer } from "../index";
import * as yup from 'yup';

export const useUserRoutes = (t: TRPCServer) => {
    return {
        Users: t.router({
            
        })
    }
}