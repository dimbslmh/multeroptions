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
@Controller("cats")
export class CatsController {
  constructor() {}

  @Post("upload/cat")
  @UseInterceptors(FileInterceptor("cat"))
  async uploadFile(
    @UploadedFile()
    cat: any
  ) {
    console.log(cat);
  }

  @Post("upload/cats")
  @UseInterceptors(FilesInterceptor("cats"))
  async uploadFiles(
    @UploadedFiles()
    cats: any
  ) {
    console.log(cats);
  }
}
