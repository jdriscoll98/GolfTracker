import { router } from "../trpc";
import { authRouter } from "./auth";
import { roundRouter } from "./round";

export const appRouter = router({
  auth: authRouter,
  round: roundRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
