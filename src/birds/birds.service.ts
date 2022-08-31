import { Injectable } from '@nestjs/common';
import { Bird } from './interfaces/bird.interface';

@Injectable()
export class BirdsService {
  private readonly birds: Bird[] = [];

  create(bird: Bird) {
    this.birds.push(bird);
  }

  findAll(): Bird[] {
    return this.birds;
  }
}
