import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

export type MuscleGroup = 'back'|'biceps'|'triceps'|'shoulders'|'chest'|'legs';


@Schema({ timestamps: true })
export class Exercise {
  @Prop({ required: true, unique: true }) // clave estable para seed/upsert
  key: string;

  @Prop({ required: true, index: true })
  name: string;

  @Prop()
  muscleGroup?: MuscleGroup;   // "chest" | "back" | etc.

  @Prop([String])
  tags?: string[];

  @Prop({ default: true })
  isActive: boolean;
}
export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
