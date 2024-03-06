import { CreateCarDto } from './create-car.dto';
import { PartialType } from '@nestjs/mapped-types';

export abstract class UpdateCarDto extends PartialType(CreateCarDto) {}
