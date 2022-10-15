import { Module } from "@nestjs/common";

import { BirdsController } from "./birds.controller";

@Module({
  imports: [],
  controllers: [BirdsController],
})
export class BirdsModule {}
