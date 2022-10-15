import { FastifyMulterModule } from "@nest-lab/fastify-multer";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CatsController } from "./cats.controller";

@Module({
  imports: [
    FastifyMulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        dest: "./upload/cats",
      }),
    }),
  ],
  controllers: [CatsController],
})
export class CatsModule {}
