import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RoutineDocument = Routine & Document;
export type RoutineItemDocument = RoutineItem & Document;

@Schema({ timestamps: true })
export class Routine {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) userId: Types.ObjectId;
  @Prop({ required: true }) title: string;
  @Prop({ default: true }) isActive: boolean;
}
export const RoutineSchema = SchemaFactory.createForClass(Routine);

@Schema({ timestamps: true })
export class RoutineItem {
  @Prop({ type: Types.ObjectId, ref: 'Routine', required: true }) routineId: Types.ObjectId;
  @Prop({ required: true, min: 1, max: 7 }) dayIndex: number;     // 1..7
  @Prop({ type: Types.ObjectId, ref: 'Exercise', required: true }) exerciseId: Types.ObjectId; // SIEMPRE catálogo
  @Prop({ default: 0 }) position: number;                         // para ordenar en el día
  @Prop({ default: 0 }) weightKg: number;
  @Prop() targetSets?: number;
  @Prop() targetReps?: number;
  @Prop() notes?: string;
}
export const RoutineItemSchema = SchemaFactory.createForClass(RoutineItem);
