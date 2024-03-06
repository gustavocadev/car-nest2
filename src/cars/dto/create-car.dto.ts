import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({
    message: 'El campo brand debe ser un string',
  })
  readonly brand: string;

  @IsString({
    message: 'El campo model debe ser un string',
  })
  readonly model: string;
}
