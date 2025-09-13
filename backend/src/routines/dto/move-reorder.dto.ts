import { IsInt, IsMongoId, Max, Min } from 'class-validator';
export class MoveOrReorderDto {
  @IsMongoId() itemId: string;
  @IsInt() @Min(1) @Max(7) toDayIndex: number;
  @IsInt() @Min(0) toPosition: number;
}