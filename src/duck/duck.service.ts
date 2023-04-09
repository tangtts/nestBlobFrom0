import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { CreateDuckDto } from "./create-duck.dto";
import { MongoRepository } from "typeorm";
import { Duck } from "./duck.entity";
@Injectable()
export class DucksService {
  constructor(
    @Inject("DUCK_REPOSITORY")
    private readonly duckRepository: MongoRepository<Duck>
  ) {}
  async create(createDuckDto: CreateDuckDto) {
    return this.duckRepository.save(createDuckDto);
  }
}
