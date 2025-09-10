import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

@Schema({ timestamps: true })
export class Exercise {
  @Prop({ required: true, unique: true }) // clave estable para seed/upsert
  key: string;

  @Prop({ required: true, index: true })
  name: string;

  @Prop()
  muscleGroup?: string;   // "chest" | "back" | etc.

  @Prop([String])
  tags?: string[];

  @Prop({ default: true })
  isActive: boolean;
}
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
