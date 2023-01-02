import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const roundRouter = router({
  postScore: protectedProcedure
    .input(z.object({ jackScore: z.number(), coleScore: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const { jackScore, coleScore } = input;
      const result = await ctx.prisma.round.create({
        data: {
          jackScore,
          coleScore,
        },
      });
      return result;
    }),

  deleteScore: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const result = await ctx.prisma.round.delete({
        where: {
          id,
        },
      });
      return result;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.round.findMany({
      select: {
        jackScore: true,
        coleScore: true,
        id: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  }),
});
