import { FileInterceptor, FilesInterceptor } from "@nest-lab/fastify-multer";
import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";

import { RolesGuard } from "../common/guards/roles.guard";

@UseGuards(RolesGuard)
@Controller("birds")
export class BirdsController {
  constructor() {}

  @Post("upload/bird")
  @UseInterceptors(
    FileInterceptor("bird", {
      dest: "./upload/bird",
    })
  )
  async uploadFile(
    @UploadedFile()
    bird: any
  ) {
    console.log(bird);
  }

  @Post("upload/birds")
  @UseInterceptors(
    FilesInterceptor("birds", undefined, {
      dest: "./upload/birds",
    })
  )
  async uploadFiles(
    @UploadedFiles()
    birds: any
  ) {
    console.log(birds);
  }
}
