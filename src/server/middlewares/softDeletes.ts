import type { Prisma } from "@prisma/client";

interface SoftDeleteMiddlewareParams extends Prisma.MiddlewareParams {
  args: {
    data: {
      deletedAt: Date;
    };
  };
}

const MODELS: Prisma.ModelName[] = ["User"];

const softDelete: Prisma.Middleware = async (
  params: SoftDeleteMiddlewareParams,
  next
): Promise<void> => {
  const nextParams = params;
  if (params.model && MODELS.includes(params.model)) {
    if (nextParams.action === "delete") {
      nextParams.action = "update";
      nextParams.args.data = { deletedAt: new Date() };
    }
    if (params.action === "deleteMany") {
      nextParams.action = "updateMany";
      if (params.args.data !== undefined) {
        nextParams.args.data.deletedAt = new Date();
      } else {
        nextParams.args.data = { deletedAt: new Date() };
      }
    }
  }
  return next(nextParams);
};

export default softDelete;
