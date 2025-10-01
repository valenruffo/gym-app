import { HttpException, HttpStatus, Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({ email: createUserDto.email });
    if (user) {
      throw new HttpException('El email ya esta registrado', HttpStatus.BAD_REQUEST);
    }
    return this.userModel.create(createUserDto);
  }

  async findAll() {
    const foundUsers = await this.userModel.find();
    return foundUsers;
  }

  async findOne(id: string) {
    const foundUser = await this.userModel.findById(id);
    if (!foundUser) throw new NotFoundException('Usuario no encontrado');
    return foundUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    if (!updatedUser) throw new NotFoundException('Usuario no encontrado');
    return updatedUser;
  }

  async delete(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
