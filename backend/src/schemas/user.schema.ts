import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document; 

@Schema({ timestamps: true })
export class User {
  @Prop({ 
    required: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  })
  name: string;

  @Prop({ 
    unique: true, 
    required: true,
    isEmail: true,
    trim: true,
  })
  email: string;

  @Prop({ 
    unique: true, 
    required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);