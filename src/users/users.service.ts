import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./entities/user.entity";
import { Model } from "mongoose";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);

    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async findLogin(email: string, password: string) {
    return await this.userModel
      .find()
      .then((data) => {
        const findItem = data.find(
          (item) => item.email === email && item.password && password
        );

        return findItem;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      }
    );
  }

  getEmail(): string {
    return this.configService.get<string>("USER_EMAIL");
  }

  getSecretKey(): string {
    return this.configService.get<string>("SECRET_KEY");
  }

  remove(id: string) {
    return this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
