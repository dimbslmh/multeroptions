import { FastifyMulterModule } from "@nest-lab/fastify-multer";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { diskStorage } from "multer";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  imports: [
    FastifyMulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const storages = {
          local: () => {
            return diskStorage({
              destination: "./files/cats"
            });
          }
        };

        return {
          storage: storages[configService.get("file.driver")](),
          limits: {
            fileSize: configService.get("file.maxFileSize")
          }
        };
      }
    })
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
