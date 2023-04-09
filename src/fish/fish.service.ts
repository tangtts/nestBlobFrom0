import { Fish } from "./fish.entity";
import { Injectable, Inject } from "@nestjs/common";
import { CreateFishDto } from "./create-fish.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class FishService {
  constructor(
    @InjectRepository(Fish)
    private readonly userRepository: Repository<Fish>
  ) {}
  async create(createCatDto: CreateFishDto) {
    const a = new Fish();
    a.name = createCatDto.name;
    return this.userRepository.save(a);
  }
}
