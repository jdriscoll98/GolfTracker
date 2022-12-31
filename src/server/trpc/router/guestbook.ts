import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const guestbookRouter = router({
  postMessage: protectedProcedure
    .input(z.object({ name: z.string(), message: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { name, message } = input;
      const result = await ctx.prisma.guestbook.create({
        data: {
          name,
          message,
        },
      });
      return result;
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.guestbook.findMany({
      select: {
        name: true,
        message: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  }),
});
