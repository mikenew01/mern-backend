import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetTodosRequest {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({ required: false, default: 2 })
  @Type(() => Number)
  @IsNumber({})
  @IsOptional()
  pageSize: number;

  @ApiProperty({ required: false, default: 1 })
  @IsNumber()
  @Type(() => Number)
  pageNumber: number;
}
