import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cats.module";
import { BirdsModule } from "./birds/birds.module";
import { CoreModule } from "./core/core.module";

@Module({
  imports: [CatsModule, BirdsModule, CoreModule]
})
export class AppModule {}
