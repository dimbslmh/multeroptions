import { FastifyMulterModule } from "@nest-lab/fastify-multer";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { diskStorage } from "multer";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  imports: [
    FastifyMulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const storages = {
          local: () => {
            return diskStorage({
              destination: "./files/cats"
            });
          }
        };

        return {
          storage: storages["local"](),
        };
      }
    })
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
