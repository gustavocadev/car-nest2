import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import crypto from 'node:crypto';

@Injectable()
export class BrandsService {
  #brands: Brand[] = [
    {
      id: crypto.randomUUID(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
      updatedAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      name: name.toLowerCase(),
      id: crypto.randomUUID(),
      createdAt: new Date().getTime(),
    };

    this.#brands.push(brand);

    return brand;
  }

  findAll() {
    return this.#brands;
  }

  findOne(id: string) {
    const brand = this.#brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found!`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.#brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found!`);
    }

    brand.name = updateBrandDto.name;

    return brand;
  }

  remove(id: string) {
    const brandIdx = this.#brands.findIndex((brand) => brand.id === id);
    this.#brands.splice(brandIdx, 1);

    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.#brands = brands;
  }
}
