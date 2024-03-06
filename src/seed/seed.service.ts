import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANS_SEED } from './data/brands.seed';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    // CARS_SEED
    // BRANS_SEED
    this.brandsService.fillBrandsWithSeedData(BRANS_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    return `This action returns all seed`;
  }
}
