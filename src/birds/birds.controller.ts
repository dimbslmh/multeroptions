import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
import { BirdsService } from "./birds.service";
import { CreateBirdDto } from "./dto/create-bird.dto";
import { Bird } from "./interfaces/bird.interface";

@UseGuards(RolesGuard)
@Controller("birds")
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post()
  @Roles("admin")
  async create(@Body() createBirdDto: CreateBirdDto) {
    this.birdsService.create(createBirdDto);
  }

  @Get()
  async findAll(): Promise<Bird[]> {
    return this.birdsService.findAll();
  }

  @Get(":id")
  findOne(
    @Param("id", new ParseIntPipe())
    id: number
  ) {
    // get by ID logic
  }
}
