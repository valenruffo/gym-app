import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: true,
    unique: true
  }) 
  email: string;

  @Prop({ 
    required: true 
  }) 
  hash: string;

  @Prop({ 
    default: false 
  }) 
  isAdmin: boolean;

  @Prop() name?: string;

  @Prop() age?: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
