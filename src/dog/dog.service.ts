import { Injectable } from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateDogDto } from "./dog.dto";
import { DogDocument } from "./dog.schema";

@Injectable()
export class DogService {
  constructor(@InjectModel("Dog") private dog: Model<DogDocument>) {}
  async createDog(dog:CreateDogDto) {
    const createDog = new this.dog(dog);
    const temp = await createDog.save();
    return temp;
  }
}
