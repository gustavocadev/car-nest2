import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import crypto from 'node:crypto';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  #cars: Car[] = [
    {
      id: crypto.randomUUID(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: crypto.randomUUID(),
      brand: 'Toyota',
      model: 'Yaris',
    },
    {
      id: crypto.randomUUID(),
      brand: 'Toyota',
      model: 'Camry',
    },
  ];

  findAll(): Car[] {
    return this.#cars;
  }

  findById(id: string): Car {
    const car = this.#cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  create(car: CreateCarDto): Car {
    return { ...car, id: crypto.randomUUID() };
  }

  update(updateCartDto: UpdateCarDto, id: string): Car {
    const car = this.#cars.find((car) => car.id === id);
    car.brand = updateCartDto.brand || car.brand;
    car.model = updateCartDto.model || car.model;

    return car;
  }

  delete(id: string) {
    const carIdx = this.#cars.findIndex((car) => car.id === id);
    this.#cars.splice(carIdx, 1);

    if (carIdx === -1)
      throw new NotFoundException(`Car with id ${id} not found`);

    return {
      message: `Car with id ${id} has been deleted`,
    };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.#cars = cars;
  }
}
