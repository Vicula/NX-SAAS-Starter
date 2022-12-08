import * as dotenv from 'dotenv';
const envFound = dotenv.config();
if (envFound.error) {
  throw new Error(envFound.error.toString())
}

export const environment = {
  production: false,
  port: parseInt(process.env.DATABASE_PORT ?? "5000", 10),
  databaseURL: process.env.DATABASE_URL as unknown as string,
  origin: process.env.ORIGIN as unknown as string,
  api: {
    prefix_v1: '/api/v1',
  },
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};