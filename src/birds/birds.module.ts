import { FastifyMulterModule } from "@nest-lab/fastify-multer";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { diskStorage } from "multer";
import { BirdsController } from "./birds.controller";
import { BirdsService } from "./birds.service";

@Module({
  imports: [
    FastifyMulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const storages = {
          local: () => {
            return diskStorage({
              destination: "./files/birds"
            });
          }
        };

        return {
          storage: storages["local"]()
        };
      }
    })
  ],
  controllers: [BirdsController],
  providers: [BirdsService]
})
export class BirdsModule {}
