import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    }),
});
