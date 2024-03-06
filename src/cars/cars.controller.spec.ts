import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';

describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
    }).compile();

    controller = module.get<CarsController>(CarsController);

    const cars = controller.findAll();
    expect(cars).toEqual(['Toyota', 'Nissan', 'Honda']);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
