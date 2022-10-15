import { FastifyMulterModule } from "@nest-lab/fastify-multer";
import { Module } from "@nestjs/common";

import { HorsesController } from "./horses.controller";

@Module({
  imports: [
    FastifyMulterModule.register({
      dest: "./upload/horses",
    }),
  ],
  controllers: [HorsesController],
})
export class HorsesModule {}
