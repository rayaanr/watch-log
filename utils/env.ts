import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DB_URL: z.string().default("mongodb://localhost:27017"),
    },
    client: {
        NEXT_PUBLIC_TMDB_API_KEY: z.string().min(1),
        NEXT_PUBLIC_API_URL: z.string().default("http://localhost:3000"),
    },
    runtimeEnv: {
        DB_URL: process.env.DB_URL,
        NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
});