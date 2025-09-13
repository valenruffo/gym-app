import { IsInt, IsMongoId, IsNumber, IsOptional, Max, Min } from 'class-validator';
export class AddItemDto {
  @IsInt() @Min(1) @Max(7) dayIndex: number;
  @IsMongoId() exerciseId: string;
  @IsNumber() @Min(0) weightKg = 0;
  @IsOptional() @IsInt() @Min(1) targetSets?: number;
  @IsOptional() @IsInt() @Min(1) targetReps?: number;
  @IsOptional() notes?: string;
}