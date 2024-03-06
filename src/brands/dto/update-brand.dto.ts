import { IsString, MinLength } from 'class-validator';

// export abstract class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export abstract class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
