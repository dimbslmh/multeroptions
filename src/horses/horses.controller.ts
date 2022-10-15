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
@Controller("horses")
export class HorsesController {
  constructor() {}

  @Post("upload/horse")
  @UseInterceptors(FileInterceptor("horse"))
  async uploadFile(
    @UploadedFile()
    horse: any
  ) {
    console.log(horse);
  }

  @Post("upload/horses")
  @UseInterceptors(FilesInterceptor("horses"))
  async uploadFiles(
    @UploadedFiles()
    horses: any
  ) {
    console.log(horses);
  }
}
